/* Project content lives here. Each project has an ordered blocks array.
Supported types: intro, row, highlight, chips, media-strip, compare, spotlight, numbers, quote, documents.
Media: {type: 'image'|'video', src, alt, caption, poster?}; use placeholder:true until replaced.
Optional PDF links: chips.items[].href / documents.items[].href. Null keeps an honest unlinked placeholder.
Spotlight: {type:'spotlight', label, device:'phone'|'laptop', media, title, paragraphs:[]}.
Quote: {type:'quote', label, text, attribution}. All prose is plain text.
Add a project object with id, title, tag, category, art and blocks; navigation is automatic. */
window.PORTFOLIO_PROJECTS = [
  {
    "title": "Starter Template Library",
    "category": "design",
    "tag": "Internship · Cape",
    "art": "cape",
    "id": "starter-template-library",
    "blocks": [
      {
        "type": "intro",
        "title": "Starter Template Library",
        "tag": "Internship · Cape"
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Cape's Template Builder helps teams create and reuse digital content. Cape staff use ready-made templates to show prospective clients what the tool can do in sales demos and clients can explore the library themselves during training. During my internship I designed templates for clients and for the starter library and researched how the library could better support people using the Template Builder for the first time."
        ]
      },
      {
        "type": "highlight",
        "label": "Approach",
        "text": "How can modular template design in Cape's Template Builder be optimised to ensure usability and scalability for clients in creative automation?",
        "paragraphs": [
          "I worked in the Double Diamond, using CMD research and design methods. After feedback from my company mentor, I narrowed my research questions: the library would help clients during onboarding, not serve internal use or reuse."
        ],
        "chips": [
          {
            "text": "Literature study",
            "href": "assets/cape/documents/literature-study.pdf"
          },
          {
            "text": "Competitive analysis",
            "href": "assets/cape/documents/competitive-analysis.pdf"
          },
          {
            "text": "Heuristic evaluation",
            "href": "assets/cape/documents/heuristic-evaluation.pdf"
          },
          {
            "text": "Advice report",
            "href": "assets/cape/documents/advice-report.pdf"
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "The templates themselves were strong. The real barrier was getting to the library: first-time users couldn't find it and they preferred trying templates themselves to watching a demo.",
        "paragraphs": [
          "A heuristic evaluation of the library's templates showed a strong, scalable structure, especially in the newer ones. The first user test then showed that the problem sat around the templates, not in them."
        ]
      },
      {
        "type": "row",
        "label": "Design & testing",
        "paragraphs": [
          "I prototyped in three rounds, from low fidelity to a final version shaped by user testing. The biggest change was making the library its own tab next to Drafts and Collections, with a welcome message and a short banner explaining it. In the last test, first-time users, given no guidance, all reached the library through the welcome message. Their feedback led to two changes: a smaller pop-up and no skip button."
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "assets/cape/prototype-v1.webp",
            "alt": "Early Cape demo prototype showing the welcome message over the template library, with Explore template library and Skip controls.",
            "caption": "Prototype v1"
          },
          {
            "type": "image",
            "src": "assets/cape/welcome-message.webp",
            "alt": "Revised welcome message explaining the safe demo environment, with one Explore template library button and no Skip option.",
            "caption": "Welcome message"
          },
          {
            "type": "image",
            "src": "assets/cape/library-tab-banner.webp",
            "alt": "Library tab alongside Available templates, Collections, Drafts and Bin, beneath the blue Demo environment banner.",
            "caption": "Library tab and demo banner",
            "compact": true
          }
        ]
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "My advice to Cape was a shared sandbox with a single entry point and temporary sessions that reset automatically, separate from production, so potential clients can explore templates safely during demos and onboarding."
        ]
      }
    ],
    "openingScreen": true
  },
  {
    "title": "Feedback Garden",
    "category": "design",
    "tag": "Research & interaction design",
    "art": "garden",
    "id": "feedback-garden",
    "blocks": [
      {
        "type": "intro",
        "title": "Feedback Garden",
        "tag": "Research & interaction design"
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Museums collect very little visitor feedback. Comment cards and exit surveys are easy to walk past and feel out of place in a quiet exhibition. Feedback Garden is an interactive installation, which we called Bloom, where a visitor answers one quick question and the answer grows into a flower in a shared garden, projected across the museum’s walls and floors."
        ]
      },
      {
        "type": "video",
        "src": "/images/bloom/concept.mp4",
        "poster": "/images/bloom/concept-poster.webp",
        "alt": "Bloom concept video",
        "caption": "Concept video: how Bloom could look at full scale."
      },
      {
        "type": "highlight",
        "label": "Process",
        "text": "How can an interactive installation make museum visitors provide quick and meaningful feedback while remaining part of the museum experience?",
        "paragraphs": [
          "I followed the Double Diamond. I explored the same idea with flowers and with light, then combined their strengths in the final design."
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "/images/bloom/first-prototype.png",
            "caption": "First prototype: scan a QR code at an artwork",
            "alt": "Bloom app screens, first prototype with flowers on a dark green background"
          },
          {
            "type": "image",
            "src": "/images/bloom/light-version.png",
            "caption": "Same idea, with light instead of flowers",
            "alt": "Bloom app screens, version with glowing light shapes instead of flowers"
          },
          {
            "type": "image",
            "src": "/images/bloom/final-design.png",
            "caption": "Final design: the flower and the garden",
            "alt": "Bloom app screens, final design with glowing flowers and a collective garden"
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "People wanted something quick and visual, not a form. Nearly everyone chose an interactive screen and nobody wanted to write a comment.",
        "paragraphs": [
          "Most respondents had never given museum feedback and found it boring. So Bloom asks one question with four ready-made answers: loved it, interesting, it was okay, not for me. Each answer grows a different flower and even a negative answer gets a flower that belongs in the garden."
        ]
      },
      {
        "type": "row",
        "label": "Design & testing",
        "paragraphs": [
          "The first prototype worked through a QR code: scan one next to an exhibition, answer on your phone and watch a flower join the garden. Testing showed that visitors liked having both a QR code and a screen. So I added a screen at the end of the exhibition where visitors can answer without a phone, with the QR code as an alternative.",
          "Feedback from peers and teachers led to a second change. Bloom now asks once, at the end of the visit, because asking at every artwork would repeat the interruption we wanted to remove."
        ]
      },
      {
        "type": "device-video",
        "src": "/images/bloom/tablet.mp4",
        "poster": "/images/bloom/tablet-poster.webp",
        "alt": "Bloom tablet prototype in use",
        "caption": "The screen version for the end of the exhibition"
      }
    ],
    "openingScreen": true
  },
  {
    "title": "Concorde",
    "category": "design",
    "tag": "Interactive storytelling",
    "art": "plane",
    "id": "concorde",
    "blocks": [
      {
        "type": "intro",
        "title": "Concorde",
        "tag": "Interactive storytelling"
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Concorde: A Transatlantic Journey is a tribute to a design, the aircraft that crossed the Atlantic at twice the speed of sound. It is a virtual Concorde flight from London to New York, told as a scroll-driven website. Each stage of the flight teaches one design decision of the aircraft."
        ]
      },
      {
        "type": "video",
        "src": "/images/concorde/concorde-site.mp4",
        "poster": "/images/concorde/concorde-poster.jpg",
        "playWhenVisible": true,
        "alt": "Concorde website recording"
      },
      {
        "type": "highlight",
        "label": "Process",
        "text": "Instead of reading about Concorde, how can you understand why it looks the way it does by flying it?",
        "paragraphs": [
          "I started with research on the aircraft and sketched the whole flight by hand, from boarding to landing. I then interviewed cabin crew to find out whether they were the right audience."
        ],
        "chips": [
          {
            "text": "Research Notes",
            "href": "./documents/concorde/research-notes.pdf"
          },
          {
            "text": "Target Audience V2",
            "href": "./documents/concorde/target-audience-v2.pdf"
          },
          {
            "text": "Interviews Analysis",
            "href": "/documents/concorde/interviews-analysis.pdf"
          },
          {
            "text": "Proof of Concept",
            "href": "./documents/concorde/proof-of-concept.pdf"
          }
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "/images/concorde/wireframe-01.png",
            "caption": "Wireframe, frame 1: the boarding pass opening",
            "alt": "Low-fidelity wireframe of the opening screen with a boarding pass from London to New York and a field for the passenger's name"
          },
          {
            "type": "image",
            "src": "/images/concorde/wireframe-05.png",
            "caption": "Wireframe, frame 5: take-off, driven by a thrust slider",
            "alt": "Low-fidelity wireframe of the take-off screen with a runway view and a thrust slider"
          },
          {
            "type": "image",
            "src": "/images/concorde/wireframe-07.png",
            "caption": "Wireframe, frame 7: breaking the sound barrier",
            "alt": "Low-fidelity wireframe showing Mach speeds from 0.8 to 2.0 above a route view"
          },
          {
            "type": "image",
            "src": "/images/concorde/wireframe-16.png",
            "caption": "Wireframe, frame 16: the journey ends with a boarding pass",
            "alt": "Low-fidelity wireframe of the final screen with a boarding pass showing London to New York and buttons to download the pass or restart the journey"
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "Cabin crew knew Concorde was fast, but not why it looks the way it does, and they wanted to be guided through it.",
        "paragraphs": [
          "Their interest was in the history and the passenger experience and most preferred a guided journey over free exploration. So the site follows one flight in order and each stage shows a design decision: the small windows at 60,000 ft, the nose that drops 5° for take-off and 12.5° for landing and the heat at Mach 2."
        ]
      },
      {
        "type": "row",
        "label": "Design & testing",
        "paragraphs": [
          "Early feedback on the concept suggested a personalised ticket and the sound of the plane and both made it into the site. The visitor types their name at check-in on a boarding pass and the flight certificate at the end that carries that name. Over three iterations the site moved from Figma frames to code, with a 3D model and real photographs of Concorde and it was tested with cabin crew."
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "/images/concorde/boarding-pass.png",
            "caption": "Check-in: the visitor types their name on a boarding pass",
            "alt": "London to New York Concorde boarding pass with a passenger name field and a seat map."
          },
          {
            "type": "image",
            "src": "/images/concorde/cabin-tour.png",
            "caption": "Cabin tour: drag to look around the inside of G-BOAA",
            "alt": "View down the aisle of Concorde G-BOAA, with passenger seats on either side and interactive tour hotspots."
          },
          {
            "type": "image",
            "src": "/images/concorde/certificate.png",
            "caption": "The flight certificate has the name from check-in",
            "alt": "Concorde supersonic flight certificate showing the passenger name in script above the flight details and a gold Mach 2 seal."
          }
        ]
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "The site is live and has been tested with cabin crew, the audience it was designed for."
        ]
      },
      {
        "type": "link-button",
        "label": "Visit the website",
        "url": "https://concordewebsite.vercel.app",
        "ariaLabel": "Visit the Concorde website (opens in a new tab)"
      }
    ]
  },
  {
    "title": "Companion on the Road",
    "category": "design",
    "tag": "UX design · Client project",
    "art": "road",
    "id": "companion-on-the-road",
    "blocks": [
      {
        "type": "intro",
        "title": "Companion on the Road",
        "tag": "UX design · Client project"
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "CBR, the Dutch driving exam organisation, wants to be seen as a companion on the road rather than someone out to fail you. Working with the agency Partout, I designed Road Ready, a mobile app concept that helps drivers aged 16 to 19 prepare for their exam and stay calm."
        ]
      },
      {
        "type": "highlight",
        "label": "Process",
        "text": "How can CBR guide teens through getting their licence, so more of them pass the first time?",
        "paragraphs": [
          "Desk research, interviews with a driving instructor and young drivers and a survey came first. I defined the problem with point-of-view and how-might-we questions. Five concepts came out of the brainstorm, including video tutorials, an app and social media campaigns. I continued with the app, built a prototype and tested it with users."
        ],
        "chips": [
          {
            "text": "Research",
            "href": "./documents/companion/research.pdf"
          },
          {
            "text": "Interviews analysis",
            "href": "./documents/companion/interviews-analysis.pdf"
          },
          {
            "text": "Survey analysis",
            "href": "./documents/companion/survey-analysis.pdf"
          },
          {
            "text": "Advice Report",
            "href": "./documents/companion/advice-report.pdf"
          }
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "./images/companion/survey-poster.png",
            "caption": "Poster with QR codes for the survey",
            "alt": "Poster with QR codes for the survey"
          },
          {
            "type": "image",
            "src": "./images/companion/option-wireframe.png",
            "caption": "Website option: wireframe",
            "alt": "Website option: wireframe"
          },
          {
            "type": "image",
            "src": "./images/companion/option-website.png",
            "caption": "Website option: coded version",
            "alt": "Website option: coded version"
          },
          {
            "type": "image",
            "src": "./images/companion/option-green-app.png",
            "caption": "App option: the green design I later dropped",
            "alt": "App option: the green design I later dropped"
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "Young drivers mostly fail their first attempt because of nerves and too little preparation and many wanted an app to guide them.",
        "paragraphs": [
          "So the app has two sides: practice, with training exercises and video tutorials and calm, with relaxation tips and a forum where learners share experiences."
        ]
      },
      {
        "type": "row",
        "label": "Design & testing",
        "paragraphs": [
          "I explored the idea as a website, in a wireframe and a prototype version and as a mobile app, including a green design that I later dropped. The final design is a high-fidelity Figma prototype you can click through, with exercises, video tutorials, relaxation tips, favourites and a community chat.",
          "Most users liked the colours and found the navigation straightforward and some felt calmer after following a relaxation tip. They also found the filter hard to use, the forum posts too text-heavy and the colours a lot. I made the appropriate adjustments based on this."
        ],
        "videoAfterFirstParagraph": {
          "src": "./images/companion/prototype.mp4",
          "poster": "./images/companion/prototype-poster.jpg",
          "playWhenVisible": true,
          "alt": "Recording of the Road Ready mobile app prototype",
          "caption": "The high-fidelity prototype in Figma"
        }
      }
    ]
  },
  {
    "title": "Lighttown Speakers",
    "category": "design",
    "tag": "Web design · Client project",
    "art": "speakers",
    "id": "lighttown-speakers",
    "blocks": [
      {
        "type": "intro",
        "title": "Lighttown Speakers",
        "tag": "Web design · Client project"
      },
      {
        "type": "row",
        "label": "Context",
        "paragraphs": [
          "Lighttown Speakers is a Toastmasters club in Eindhoven that trains people in public speaking and it needed a way to attract businesses and new people, so, based on our research, we decided to make a website and ads."
        ]
      },
      {
        "type": "highlight",
        "label": "Process",
        "text": "What does a company need to see before it chooses a public speaking club?",
        "paragraphs": [
          "I researched how businesses decide and turned it into a customer journey map. I then researched similar websites, sketched my layout, drew wireframes of the home and About pages in two versions each and built a Figma prototype of every page. The teachers' feedback on it led to a Terms and Conditions button, new ghost buttons and a more detailed Join page."
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "./images/lighttown/journey-map.png",
            "caption": "Customer journey map",
            "alt": "Customer journey map"
          },
          {
            "type": "image",
            "src": "./images/lighttown/wireframe-home-a.png",
            "caption": "Wireframe: home page, version A",
            "alt": "Wireframe: home page, version A"
          },
          {
            "type": "image",
            "src": "./images/lighttown/wireframe-home-b.png",
            "caption": "Wireframe: home page, version B",
            "alt": "Wireframe: home page, version B"
          },
          {
            "type": "image",
            "src": "./images/lighttown/wiireframe-about-a.png",
            "caption": "Wireframe: About page, version A",
            "alt": "Wireframe: About page, version A"
          },
          {
            "type": "image",
            "src": "./images/lighttown/wireframe-about-b.png",
            "caption": "Wireframe: About page, version B",
            "alt": "Wireframe: About page, version B"
          }
        ]
      },
      {
        "type": "highlight",
        "label": "Insight",
        "text": "Companies struggled to find local training and to trust what they found online.",
        "paragraphs": [
          "The journey map showed where it goes wrong: companies can't easily find local training, there is too little information online and too little proof that it works. So the website puts the courses and membership up front and uses the About Us page to introduce the people behind the club."
        ]
      },
      {
        "type": "row",
        "label": "Design & testing",
        "paragraphs": [
          "We put all three team prototypes to a survey and we built the website based on their choices. Comments asked for tighter spacing and alignment. The client then asked for a privacy statement instead of terms and conditions and user tests of the finished site led to a more obvious home button, because clicking the logo wasn't clear enough."
        ]
      },
      {
        "type": "media-strip",
        "items": [
          {
            "type": "image",
            "src": "./images/lighttown/figma-overview.png",
            "caption": "My Figma prototype, all pages",
            "alt": "My Figma prototype, all pages"
          },
          {
            "type": "image",
            "src": "./images/lighttown/poster-final.png",
            "caption": "Poster after feedback",
            "alt": "Poster after feedback"
          },
          {
            "type": "image",
            "src": "./images/lighttown/ad.png",
            "caption": "Advert",
            "alt": "Advert"
          }
        ]
      },
      {
        "type": "row",
        "label": "Result",
        "paragraphs": [
          "I also designed the poster and advert in InDesign, my first time with the tool. After feedback from the client and teachers I removed a shadow, added the club name next to the logo and the host's name and moved the contact details and logo.",
          "The website is built and carries the client's feedback and the poster and advert met the expectations of the client and teachers."
        ]
      }
    ]
  },
  {
    "title": "CitizenCity",
    "category": "security",
    "tag": "Data space security assessment",
    "art": "network",
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
    "title": "Security Monitoring",
    "category": "security",
    "tag": "Network & web attack detection",
    "art": "network",
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
