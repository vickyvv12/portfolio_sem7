/* Project content lives here. Each project has an ordered blocks array.
Supported types: intro, row, highlight, chips, media-strip, compare, spotlight, numbers, quote, documents.
Media: {type: 'image'|'video', src, alt, caption, poster?}; use placeholder:true until replaced.
Optional PDF links: chips.items[].href / documents.items[].href. Null keeps an honest unlinked placeholder.
Spotlight: {type:'spotlight', label, device:'phone'|'laptop', media, title, paragraphs:[]}.
Quote: {type:'quote', label, text, attribution}. All prose is plain text.
Add a project object with id, title, tag, category, art, accent and blocks; navigation is automatic. */
window.PORTFOLIO_PROJECTS = [
  {
    "title": "Starter Template Library",
    "category": "design",
    "tag": "Internship · Cape",
    "art": "cape",
    "accent": "#814057",
    "id": "starter-template-library",
    "blocks": [
      {
        "type": "intro",
        "title": "Starter Template Library",
        "tag": "Internship · Cape",
        "text": "Making Cape’s starter template library easier for first-time users to find and explore during demos and onboarding.",
        "facts": {
          "role": "Template Designer intern",
          "timeframe": "September 2025 – January 2026",
          "tools": [
            "Cape Template Builder",
            "Figma"
          ]
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Cape’s Template Builder helps teams create and reuse digital content. Cape staff use ready-made templates to show prospective clients what the tool can do during sales demos. Once clients have access to the platform, they can explore the library themselves during training.",
          "During my internship, I designed templates for clients and for the starter library. My research project focused on how the library could better support people using the Template Builder for the first time."
        ]
      },
      {
        "type": "highlight",
        "label": "Question",
        "text": "How can modular template design in Cape's Template Builder be optimised to ensure usability and scalability for clients in creative automation?"
      },
      {
        "type": "row",
        "label": "Approach",
        "paragraphs": [
          "I followed the Double Diamond using CMD research and design methods. After feedback from my company mentor, I narrowed my research questions: the library would help clients during onboarding, not serve internal use or reuse. That kept the project focused on one audience and one problem."
        ],
        "steps": [
          {
            "title": "Discover",
            "text": "Literature study, competitive analysis, interview, heuristic evaluation and user test"
          },
          {
            "title": "Define",
            "text": "The library is strong, but hard to find and not yet hands-on"
          },
          {
            "title": "Develop",
            "text": "Prototypes with a welcome message, a banner and a sandbox concept"
          },
          {
            "title": "Deliver",
            "text": "A second user test and an advice report"
          }
        ]
      },
      {
        "type": "row",
        "label": "Research",
        "paragraphs": [
          "I combined desk research with testing, so each finding was checked from more than one angle."
        ]
      },
      {
        "type": "chips",
        "label": "Research methods",
        "items": [
          {
            "text": "Literature study",
            "href": null
          },
          {
            "text": "Competitive analysis",
            "href": null
          },
          {
            "text": "Stakeholder interview",
            "href": null
          },
          {
            "text": "Heuristic evaluation",
            "href": null
          },
          {
            "text": "User persona",
            "href": null
          },
          {
            "text": "User test 1",
            "href": null
          },
          {
            "text": "User test 2",
            "href": null
          }
        ],
        "findings": [
          "Literature study: reusable systems are built from small, consistent components with clear naming.",
          "Competitive analysis: Figma's component libraries, Canva's clear categories and Bannerwise's locked elements each offered something Cape could use.",
          "Heuristic evaluation: I reviewed five templates against four criteria. Newer templates were more modular and better constrained than older ones; fixed text fields and unrestricted image uploads could break a layout.",
          "Stakeholder interview: Cape's clients are multinationals where scalability matters more than industry. Hands-on access helps, but the full platform can overwhelm new users.",
          "Persona: Hannah, a digital marketing specialist evaluating Cape in a demo, worried she wouldn't try the tool before deciding.",
          "User test: first-time users preferred trying templates themselves, but several couldn't find the library, even after it was explained."
        ]
      },
      {
        "type": "media-strip",
        "label": "User persona",
        "items": [
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "User Persona.png — placeholder; original image not yet supplied",
            "caption": "Hannah · digital marketing specialist — persona image to be added",
            "placeholder": true
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "The templates themselves were strong. The problem was around them: first-time users couldn't find the library or see why it mattered, and they preferred trying templates to watching a demo."
      },
      {
        "type": "row",
        "label": "Design",
        "paragraphs": [
          "I prototyped in three rounds. The low-fidelity version explored layout and flow. The high-fidelity version added branding, a welcome message and a blue “demo environment” banner. I chose blue to communicate trust in a software setting.",
          "The final version applied user test feedback. The biggest change was making the library its own tab in the Templates section, next to Drafts and Collections, with a short banner explaining what it is."
        ],
        "links": [
          {
            "text": "Open the prototype in Figma",
            "href": null
          }
        ]
      },
      {
        "type": "media-strip",
        "label": "Prototype development",
        "items": [
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "Low-fidelity prototype — placeholder; original image not yet supplied",
            "caption": "Low-fidelity prototype — image to be added",
            "placeholder": true
          },
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "Welcome message cutout — placeholder; original image not yet supplied",
            "caption": "Welcome message — cutout to be added",
            "placeholder": true
          },
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "Library tab and banner cutouts — placeholder; original image not yet supplied",
            "caption": "Library tab and informational banner — cutouts to be added",
            "placeholder": true
          }
        ]
      },
      {
        "type": "compare",
        "label": "Welcome message: before / after testing",
        "items": [
          {
            "label": "Before testing · v1 with Skip",
            "media": {
              "type": "image",
              "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
              "alt": "Welcome message v1 with Skip — placeholder; original image not yet supplied",
              "caption": "Welcome message before testing — image to be added",
              "placeholder": true
            }
          },
          {
            "label": "After testing · without Skip",
            "media": {
              "type": "image",
              "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
              "alt": "Final welcome message without Skip — placeholder; original image not yet supplied",
              "caption": "Welcome message after testing — image to be added",
              "placeholder": true
            }
          }
        ]
      },
      {
        "type": "row",
        "label": "Testing",
        "paragraphs": [
          "I tested the final flow with five people who had never used the Template Builder, giving them no guidance. The welcome message got them to the library quickly, and the library itself caused no layout or filtering problems."
        ]
      },
      {
        "type": "numbers",
        "label": "Testing results",
        "items": [
          {
            "value": "5 of 5",
            "caption": "Noticed the welcome message"
          },
          {
            "value": "5 of 5",
            "caption": "Used its button to open the library"
          },
          {
            "value": "0",
            "caption": "Looked for the library in the side navigation"
          },
          {
            "value": "2",
            "caption": "Changes made: a smaller pop-up and no skip button"
          }
        ]
      },
      {
        "type": "row",
        "label": "Templates",
        "paragraphs": [
          "Alongside the research, I designed templates for the library. The gambling template went through several rounds of stakeholder feedback. Clients can change text, images and colours without breaking the layout, and it supports several languages.",
          "My first training template showed multiple formats and animations in Cape's Template Designer."
        ]
      },
      {
        "type": "media-strip",
        "label": "Template creation",
        "items": [
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "Predefined template gambling.png — placeholder; original image not yet supplied",
            "caption": "Predefined gambling template — image to be added",
            "placeholder": true
          },
          {
            "type": "image",
            "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "feedback-gambling.png — placeholder; original image not yet supplied",
            "caption": "Stakeholder feedback on the gambling template — image to be added",
            "placeholder": true
          },
          {
            "type": "video",
            "src": null,
            "poster": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9d5db%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22100%22%20width%3D%22940%22%20height%3D%22600%22%20rx%3D%2220%22%20fill%3D%22%23fff3f0%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M180%20590l230-220%20155%20135%20180-200%20275%20285%22%20fill%3D%22none%22%20stroke%3D%22%23b58597%22%20stroke-width%3D%225%22%2F%3E%3Ccircle%20cx%3D%22850%22%20cy%3D%22245%22%20r%3D%2242%22%20fill%3D%22%23d8b4c2%22%2F%3E%3C%2Fsvg%3E",
            "alt": "Training template screen recording — video not yet supplied",
            "caption": "Training template screen recording — muted, looping video to be added",
            "placeholder": true,
            "muted": true,
            "loop": true,
            "autoplay": true
          }
        ]
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "My advice to Cape was a shared sandbox with a single entry point, where potential clients work in temporary sessions that reset automatically. It stays separate from production, and it opens straight on the template library, which sits inside the existing Templates section. This gives sales demos and onboarding a safe, hands-on way to explore, without extra technical complexity."
        ]
      },
      {
        "type": "chips",
        "label": "Recommendations",
        "items": [
          {
            "text": "Shared sandbox"
          },
          {
            "text": "Separate from production"
          },
          {
            "text": "Library in Templates"
          },
          {
            "text": "Informational banner"
          }
        ]
      },
      {
        "type": "documents",
        "label": "Documents",
        "items": [
          {
            "title": "Research report",
            "href": null
          },
          {
            "title": "Advice report",
            "href": null
          },
          {
            "title": "Literature study",
            "href": null
          },
          {
            "title": "Heuristic evaluation",
            "href": null
          },
          {
            "title": "Competitive analysis",
            "href": null
          },
          {
            "title": "User test analysis",
            "href": null
          }
        ]
      }
    ]
  },
  {
    "title": "Feedback Garden",
    "category": "design",
    "tag": "Research & interaction design",
    "art": "garden",
    "accent": "#486543",
    "id": "feedback-garden",
    "blocks": [
      {
        "type": "intro",
        "title": "Feedback Garden",
        "tag": "Research & interaction design",
        "text": "Turning a quick response into a shared digital garden.",
        "facts": {
          "role": "Duo project · Research & web prototyping",
          "timeframe": "Semester 7 · 2026",
          "tools": [
            "Interviews & surveys",
            "Usability testing",
            "HTML / CSS",
            "JavaScript / SVG"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "How can museum visitors give quick, anonymous feedback while staying immersed in their visit?",
          "Turning a quick response into a shared digital garden."
        ]
      },
      {
        "type": "row",
        "label": "Research",
        "paragraphs": [
          "This page will introduce the research questions and the people or sources involved.",
          "Add the strongest insight here, explaining how it helped define the direction of the project."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Ideas",
        "paragraphs": [
          "Show the early concepts and the alternatives considered.",
          "Explain why one direction was selected, and what questions still needed to be tested."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Design",
        "paragraphs": [
          "Explain one important design decision and the need it addresses.",
          "Add sketches, wireframes or a prototype image to show how the idea developed."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Testing",
        "paragraphs": [
          "Describe who tried the concept and what the test was designed to learn.",
          "Add an observation and the specific change made in response."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Concorde",
    "category": "design",
    "tag": "Interactive storytelling",
    "art": "plane",
    "accent": "#39657b",
    "id": "concorde",
    "blocks": [
      {
        "type": "intro",
        "title": "Concorde",
        "tag": "Interactive storytelling",
        "text": "A journey from boarding in London to landing in New York.",
        "facts": {
          "role": "Duo project · Research & front-end contribution",
          "timeframe": "Semester 7 · 2026",
          "tools": [
            "Audience research",
            "Personas",
            "Storytelling",
            "Front-end development"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Create an interactive tribute that introduces an iconic design through an engaging visual story.",
          "A journey from boarding in London to landing in New York."
        ]
      },
      {
        "type": "row",
        "label": "Concept",
        "paragraphs": [
          "Introduce the central idea and the audience it was intended for.",
          "Explain how the concept connects the project brief to the experience visitors would have."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Design",
        "paragraphs": [
          "Explain one important design decision and the need it addresses.",
          "Add sketches, wireframes or a prototype image to show how the idea developed."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Build",
        "paragraphs": [
          "Describe the main implementation choices and your individual contribution.",
          "Add an example of an interaction, technical challenge or improvement made during development."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Companion on the Road",
    "category": "design",
    "tag": "UX/UI · Partout / CBR",
    "art": "road",
    "accent": "#8d4c42",
    "id": "companion-on-the-road",
    "blocks": [
      {
        "type": "intro",
        "title": "Companion on the Road",
        "tag": "UX/UI · Partout / CBR",
        "text": "Helping young drivers prepare with more confidence.",
        "facts": {
          "role": "Independently completed client assignment",
          "timeframe": "Semester 3 · 2024",
          "tools": [
            "Double Diamond",
            "Interviews & surveys",
            "Figma",
            "Usability testing"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Partout’s brief asked for a digital proof of concept to support 16–19-year-olds preparing for their driving exam.",
          "Helping young drivers prepare with more confidence."
        ]
      },
      {
        "type": "row",
        "label": "Research",
        "paragraphs": [
          "This page will introduce the research questions and the people or sources involved.",
          "Add the strongest insight here, explaining how it helped define the direction of the project."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Ideas",
        "paragraphs": [
          "Show the early concepts and the alternatives considered.",
          "Explain why one direction was selected, and what questions still needed to be tested."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Design",
        "paragraphs": [
          "Explain one important design decision and the need it addresses.",
          "Add sketches, wireframes or a prototype image to show how the idea developed."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Testing",
        "paragraphs": [
          "Describe who tried the concept and what the test was designed to learn.",
          "Add an observation and the specific change made in response."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Lighttown Speakers",
    "category": "design",
    "tag": "Web design & development",
    "art": "speakers",
    "accent": "#205d70",
    "id": "lighttown-speakers",
    "blocks": [
      {
        "type": "intro",
        "title": "Lighttown Speakers",
        "tag": "Web design & development",
        "text": "A clearer introduction to a local public-speaking club.",
        "facts": {
          "role": "Team project · Design, development & testing",
          "timeframe": "Semester 2 · 2024",
          "tools": [
            "Figma",
            "HTML / CSS",
            "Survey",
            "Usability testing"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Design and code a website explaining the club’s activities, meetings and membership.",
          "A clearer introduction to a local public-speaking club."
        ]
      },
      {
        "type": "row",
        "label": "Concept",
        "paragraphs": [
          "Introduce the central idea and the audience it was intended for.",
          "Explain how the concept connects the project brief to the experience visitors would have."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Design",
        "paragraphs": [
          "Explain one important design decision and the need it addresses.",
          "Add sketches, wireframes or a prototype image to show how the idea developed."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Build",
        "paragraphs": [
          "Describe the main implementation choices and your individual contribution.",
          "Add an example of an interaction, technical challenge or improvement made during development."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "CitizenCity",
    "category": "security",
    "tag": "Data space security assessment",
    "art": "network",
    "accent": "#4c5e86",
    "id": "citizencity",
    "blocks": [
      {
        "type": "intro",
        "title": "CitizenCity",
        "tag": "Data space security assessment",
        "text": "Investigating security between data space services.",
        "facts": {
          "role": "Network isolation & traffic analysis",
          "timeframe": "Semester 6 · 2026",
          "tools": [
            "Network security",
            "Traffic analysis",
            "Risk analysis",
            "Technical reporting"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "The Inzicht Verlicht use case explored sharing public lighting data across systems. Our security work examined internal isolation and encryption.",
          "Investigating security between data space services."
        ]
      },
      {
        "type": "row",
        "label": "Question",
        "paragraphs": [
          "State the security question, scope and boundaries of the investigation.",
          "Describe the environment and the evidence needed to answer the question."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Approach",
        "paragraphs": [
          "Outline the investigation or lab setup and the methods used.",
          "Add a diagram or short demonstration explaining how evidence was collected and compared."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Findings",
        "paragraphs": [
          "Present one finding and the evidence supporting it.",
          "Explain what can be concluded from that evidence, including limitations and unresolved questions."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Ransomware Response",
    "category": "security",
    "tag": "Endpoint detection & response",
    "art": "terminal",
    "accent": "#46705c",
    "id": "ransomware-response",
    "blocks": [
      {
        "type": "intro",
        "title": "Ransomware Response",
        "tag": "Endpoint detection & response",
        "text": "Detecting file changes and stopping a simulator.",
        "facts": {
          "role": "Individual lab project",
          "timeframe": "Semester 6 · 2026",
          "tools": [
            "Wazuh",
            "Sysmon",
            "File integrity monitoring",
            "Active Response"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Test how quickly a Windows endpoint can detect and respond to ransomware-like behaviour.",
          "Detecting file changes and stopping a simulator."
        ]
      },
      {
        "type": "row",
        "label": "Question",
        "paragraphs": [
          "State the security question, scope and boundaries of the investigation.",
          "Describe the environment and the evidence needed to answer the question."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Approach",
        "paragraphs": [
          "Outline the investigation or lab setup and the methods used.",
          "Add a diagram or short demonstration explaining how evidence was collected and compared."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Findings",
        "paragraphs": [
          "Present one finding and the evidence supporting it.",
          "Explain what can be concluded from that evidence, including limitations and unresolved questions."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Security Monitoring",
    "category": "security",
    "tag": "Network & web attack detection",
    "art": "network",
    "accent": "#586393",
    "id": "security-monitoring",
    "blocks": [
      {
        "type": "intro",
        "title": "Security Monitoring",
        "tag": "Network & web attack detection",
        "text": "Following simulated attacks through logs and alerts.",
        "facts": {
          "role": "Monitoring lab",
          "timeframe": "Semester 6 · 2026",
          "tools": [
            "pfSense",
            "Wazuh",
            "Zeek",
            "Suricata"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Build a lab to understand how different monitoring tools capture network and web attack activity.",
          "Following simulated attacks through logs and alerts."
        ]
      },
      {
        "type": "row",
        "label": "Question",
        "paragraphs": [
          "State the security question, scope and boundaries of the investigation.",
          "Describe the environment and the evidence needed to answer the question."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Approach",
        "paragraphs": [
          "Outline the investigation or lab setup and the methods used.",
          "Add a diagram or short demonstration explaining how evidence was collected and compared."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Findings",
        "paragraphs": [
          "Present one finding and the evidence supporting it.",
          "Explain what can be concluded from that evidence, including limitations and unresolved questions."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  },
  {
    "title": "Digital Forensics",
    "category": "security",
    "tag": "Smart home & IoT investigations",
    "art": "terminal",
    "accent": "#716044",
    "id": "digital-forensics",
    "blocks": [
      {
        "type": "intro",
        "title": "Digital Forensics",
        "tag": "Smart home & IoT investigations",
        "text": "Reconstructing activity across connected devices.",
        "facts": {
          "role": "Two academic investigation cases",
          "timeframe": "Semester 6 · 2026",
          "tools": [
            "Autopsy",
            "Wireshark",
            "HxD",
            "DB Browser for SQLite"
          ],
          "client": "Academic project"
        }
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Investigate two simulated incidents using smartphone images, smart-home artefacts and network captures.",
          "Reconstructing activity across connected devices."
        ]
      },
      {
        "type": "row",
        "label": "Question",
        "paragraphs": [
          "State the security question, scope and boundaries of the investigation.",
          "Describe the environment and the evidence needed to answer the question."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Approach",
        "paragraphs": [
          "Outline the investigation or lab setup and the methods used.",
          "Add a diagram or short demonstration explaining how evidence was collected and compared."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Findings",
        "paragraphs": [
          "Present one finding and the evidence supporting it.",
          "Explain what can be concluded from that evidence, including limitations and unresolved questions."
        ],
        "draft": true,
        "leadBold": null
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "Summarise the final deliverable and what was demonstrated or validated.",
          "Close with one lesson and a practical next step. Replace this draft with the final project reflection."
        ],
        "draft": true,
        "leadBold": null
      }
    ]
  }
];
