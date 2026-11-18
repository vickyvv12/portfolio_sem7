/* Lightweight block renderer. Project copy and block order belong in projects-data.js. */
window.PortfolioBlocks = (() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => {
    if (!value) return '';
    try { const url = new URL(value, location.href); return ['http:','https:'].includes(url.protocol) || /^data:image\/(svg\+xml|png|jpeg|webp|gif)[;,]/i.test(value) ? esc(value) : ''; } catch { return ''; }
  };
  const label = text => text ? `<h2 class="block-label">[${esc(text)}]</h2>` : '';
  const paragraphs = (values, lead) => (Array.isArray(values) ? values : values ? [values] : []).map((text, i) => `<p>${i === 0 && lead && text.startsWith(lead) ? `<strong>${esc(lead)}</strong>${esc(text.slice(lead.length))}` : esc(text)}</p>`).join('');
  const docIcon = '<svg class="doc-icon" viewBox="0 0 16 18" aria-hidden="true"><path d="M3 1h6l4 4v12H3zM9 1v5h4M5 10h6M5 13h5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
  function media(item = {}) {
    const src = safeURL(item.src);
    if (item.placeholder || !src) return `<div class="block-media-surface is-placeholder" role="img" aria-label="${esc(item.alt || 'Missing project image')}"></div>`;
    const note = item.placeholder ? `<span class="placeholder-note">${item.type === 'video' ? 'Video' : 'Image'} to be added</span>` : '';
    if (item.type === 'video' && !src) return `<div class="block-media-surface"><img src="${safeURL(item.poster)}" alt="${esc(item.alt || 'Video placeholder')}" loading="lazy" decoding="async" draggable="false">${note}</div>`;
    if (item.type === 'video') return `<div class="block-media-surface"><video controls playsinline preload="none" ${item.muted ? 'muted' : ''} ${item.loop ? 'loop' : ''} ${item.autoplay ? 'autoplay' : ''} aria-label="${esc(item.alt || 'Project video')}" ${item.poster ? `poster="${safeURL(item.poster)}"` : ''}><source src="${src}">Your browser does not support this video.</video></div>`;
    return `<div class="block-media-surface"><img src="${src}" alt="${esc(item.alt || 'Project image')}" loading="lazy" decoding="async" draggable="false">${note}</div>`;
  }
  const caption = text => text ? `<figcaption>${esc(text)}</figcaption>` : '';
  const renderers = {
    intro: (b, p, name) => {
      const facts = b.facts || {};
      return `<section class="content-block block-intro"><div class="vertical-hero"><h1 tabindex="-1" style="view-transition-name:${esc(name)}">${esc(b.title || p.title)}</h1><span class="vertical-tag">[${esc(b.tag || p.tag)}]</span></div><div class="intro-detail"><div class="block-copy">${paragraphs(b.text)}</div><dl class="block-facts">${Object.entries(facts).map(([key, value]) => `<div><dt>[${esc(key)}]</dt><dd>${esc(Array.isArray(value) ? value.join(', ') : value)}</dd></div>`).join('')}</dl></div></section>`;
    },
    row: b => `<section class="content-block block-row reveal">${label(b.label)}<div class="block-copy">${b.draft ? '<span class="vertical-draft">Draft content placeholder</span>' : ''}${paragraphs(b.paragraphs, b.leadBold)}${(b.links || []).map(link => safeURL(link.href) ? `<p class="block-inline-link"><a href="${safeURL(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.text)} <span aria-hidden="true">↗</span></a></p>` : `<p class="block-inline-link pending-link">${esc(link.text)} · link to be added</p>`).join('')}</div>${b.steps?.length ? `<ol class="process-diagram" aria-label="Double Diamond process">${b.steps.map(step => `<li><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p></li>`).join('')}</ol>` : ''}</section>`,
    highlight: b => `<section class="content-block block-row block-highlight reveal">${label(b.label)}<div class="block-copy"><p>${esc(b.text)}</p></div></section>`,
    chips: b => `<section class="content-block block-row block-chips reveal">${label(b.label)}<div><div class="block-chip-list">${(b.items || []).map(item => typeof item === 'string' ? `<span class="block-chip">${esc(item)}</span>` : safeURL(item.href) ? `<a class="block-chip" href="${safeURL(item.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(item.text)} (PDF, opens in a new tab)">${esc(item.text)}${docIcon}</a>` : `<span class="block-chip">${esc(item.text)}</span>`).join('')}</div>${b.findings?.length ? `<ul class="block-findings">${b.findings.map(text => `<li>${esc(text)}</li>`).join('')}</ul>` : ''}</div></section>`,
    'media-strip': (b, p, name, i) => `<section class="content-block block-strip reveal" aria-label="${esc(b.label || 'Project media')}">${b.label || b.text ? `<div class="block-strip-heading">${label(b.label)}<div class="block-copy">${paragraphs(b.text)}</div></div>` : ''}<div class="strip-viewport" tabindex="0" role="region" aria-label="${esc(b.label || 'Project media')}; scroll sideways for more"><div class="strip-track">${(b.items || []).map(item => `<figure>${media(item)}${caption(item.caption)}</figure>`).join('')}</div></div><div class="strip-footer"><div class="strip-progress" role="progressbar" aria-label="Media strip position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div><div class="strip-arrows"><button type="button" data-strip-step="-1" aria-label="Previous media">←</button><button type="button" data-strip-step="1" aria-label="Next media">→</button></div></div></section>`,
    compare: b => `<section class="content-block block-row block-compare reveal">${label(b.label)}<div>${b.text ? `<div class="block-copy compare-copy">${paragraphs(b.text)}</div>` : ''}<div class="compare-grid" style="--compare-count:${Math.max(2, Math.min(3, (b.items || []).length))}">${(b.items || []).map(item => `<figure><h3>${esc(item.label)}</h3>${media(item.media || item)}${caption(item.caption || item.media?.caption)}</figure>`).join('')}</div></div></section>`,
    spotlight: b => `<section class="content-block block-spotlight reveal"><figure class="device-mockup ${b.device === 'phone' ? 'device-phone' : 'device-laptop'}"><div class="device-screen">${media(b.media)}</div>${caption(b.caption)}</figure><div class="spotlight-copy">${label(b.label)}<h3>${esc(b.title)}</h3><div class="block-copy">${paragraphs(b.paragraphs || b.text)}</div></div></section>`,
    numbers: b => `<section class="content-block block-row block-numbers reveal">${label(b.label)}<dl class="numbers-grid" style="--number-count:${Math.max(1, Math.min(4, (b.items || []).length))}">${(b.items || []).map(item => `<div><dt>${esc(item.value)}</dt><dd>${esc(item.caption)}</dd></div>`).join('')}</dl></section>`,
    quote: b => `<figure class="content-block block-quote reveal"><div class="block-offset">${label(b.label)}<blockquote><p>${esc(b.text)}</p></blockquote><figcaption>${esc(b.attribution)}</figcaption></div></figure>`,
    documents: b => `<section class="content-block block-row block-documents reveal">${label(b.label || 'Documents')}<ul>${(b.items || []).map(item => `<li>${safeURL(item.href) ? `<a href="${safeURL(item.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(item.title)} (PDF, opens in a new tab)"><span>${docIcon}${esc(item.title)}</span><span aria-hidden="true">↗</span></a>` : `<div class="document-placeholder"><span>${docIcon}${esc(item.title)}</span>${b.showPending === false ? '' : '<small>PDF to be added</small>'}</div>`}${item.description ? `<p>${esc(item.description)}</p>` : ''}</li>`).join('')}</ul></section>`
  };
  function render(p, name) {
    return (p.blocks || []).map((b, i) => renderers[b.type]?.(b, p, name, i) || '').join('');
  }
  function bind(root) {
    const cleanups = [];
    root.querySelectorAll('.block-strip').forEach(strip => {
      const viewport = strip.querySelector('.strip-viewport');
      const previous = strip.querySelector('[data-strip-step="-1"]');
      const next = strip.querySelector('[data-strip-step="1"]');
      const progress = strip.querySelector('.strip-progress');
      const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const update = () => {
        const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        const fraction = viewport.scrollWidth ? Math.min(1, (viewport.scrollLeft + viewport.clientWidth) / viewport.scrollWidth) : 1;
        progress.querySelector('span').style.transform = `scaleX(${fraction})`;
        progress.setAttribute('aria-valuenow', String(Math.round(fraction * 100)));
        previous.disabled = viewport.scrollLeft <= 2;
        next.disabled = max <= 2 || viewport.scrollLeft >= max - 2;
      };
      const move = step => viewport.scrollBy({left:step * viewport.clientWidth * .8, behavior:reduced() ? 'auto' : 'smooth'});
      previous.onclick = () => move(-1); next.onclick = () => move(1);
      viewport.addEventListener('scroll', update, {passive:true});
      viewport.addEventListener('keydown', e => {
        if (e.target.closest('video') || e.ctrlKey || e.metaKey || e.altKey) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1);}
      });
      let drag = null, dragged = false;
      viewport.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('video,button,a')) return;
        drag = {id:e.pointerId, x:e.clientX, y:e.clientY, left:viewport.scrollLeft}; dragged = false;
      });
      viewport.addEventListener('pointermove', e => {
        if (!drag || e.pointerId !== drag.id) return;
        const dx = e.clientX - drag.x;
        if (!dragged && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - drag.y)) {dragged = true; viewport.setPointerCapture(e.pointerId); viewport.classList.add('is-dragging');}
        if (dragged) {e.preventDefault(); viewport.scrollLeft = drag.left - dx;}
      });
      const finish = () => {drag = null; viewport.classList.remove('is-dragging');};
      viewport.addEventListener('pointerup', finish); viewport.addEventListener('pointercancel', finish);
      viewport.addEventListener('pointerleave', () => {if (!dragged) finish();});
      viewport.addEventListener('click', e => {if (dragged) {e.preventDefault(); dragged = false;}}, true);
      const observer = new ResizeObserver(update); observer.observe(viewport);
      viewport.querySelectorAll('img').forEach(img => img.addEventListener('load', update));
      update(); cleanups.push(() => observer.disconnect());
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }
  return {render, bind};
})();
