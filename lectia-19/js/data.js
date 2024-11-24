const articles = [
  {
    source: {
      id: null,
      name: "Roc-lang.org",
    },
    author: null,
    title:
      "Why doesn't Roc have a Maybe or Option or Optional, or null or nil or undefined?",
    description:
      "Frequently asked questions about the Roc programming language.",
    url: "https://www.roc-lang.org/faq.html#option-type",
    urlToImage: null,
    publishedAt: "2024-10-24T11:13:12Z",
    content:
      "The Roc programming language is named after a mythical bird.\r\nThe Roc logo\r\nA purple origami bird made of six triangles\r\nThat's why the logo is a bird. Its specifically an origami bird as an homage\r\n… [+33760 chars]",
  },
  {
    source: {
      id: null,
      name: "Github.io",
    },
    author: "Shafik Yaghmour",
    title: "Triaging Clang C++ front end bugs",
    description: "Blog about C++, C, Undefined Behavior and Compilers",
    url: "https://shafik.github.io/c++/llvm/2024/10/17/triaging-clang-fronend-bugs.html",
    urlToImage: "https://shafik.github.io/static/img/avatar.jpg",
    publishedAt: "2024-10-19T14:24:08Z",
    content:
      "Triaging clang C++ frontend bugs\r\nI have been triaging clang C++ frontend bugs for about a couple of years now and I wanted to share some of the lessons I have learnt in the hopes that others in the … [+14477 chars]",
  },
  {
    source: {
      id: null,
      name: "Liblisa.nl",
    },
    author: null,
    title: "LibLISA – Instruction Discovery and Analysis on x86-64",
    description:
      "libLISA derives x86-64 instruction semantics bottom-up from CPU behavior. The semantics are machine-readable and CPU-specific.",
    url: "https://liblisa.nl/",
    urlToImage: "https://liblisa.nl/logo.png",
    publishedAt: "2024-10-24T07:35:56Z",
    content:
      "libLISA is a tool that can fully automatically scan instruction space, discover instructions and synthesize their semantics.\r\n It produces machine-readable, CPU-specific x86-64 instruction semantics.… [+3202 chars]",
  },
  {
    source: {
      id: null,
      name: "Haxx.se",
    },
    author: "Daniel Stenberg",
    title: "UndefinedBehaviorSanitizer's Unexpected Behavior",
    description: "Comments",
    url: "https://daniel.haxx.se/blog/2024/10/17/undefinedbehaviorsanitizers-unexpected-behavior/",
    urlToImage: null,
    publishedAt: "2024-10-17T08:20:34Z",
    content:
      "The transition from Ubuntu 22 to 24 for ubuntu-latest on GitHub actions started recently with the associated version bumps of a lot of applications. As expected.\r\nOne of the version bumps is for clan… [+6201 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "Olivia Rubin",
    title: "Georgia judge invalidates more controversial election rules",
    description:
      'A Georgia judge determined that seven new rules passed by the GOP-controlled state election board were "unlawful and void."',
    url: "https://abcnews.go.com/Politics/georgia-judge-invalidates-controversial-election-rules/story?id=114875224",
    urlToImage:
      "https://i.abcnewsfe.com/a/4320a71d-f2db-4b0b-bf4f-f01a4552f056/georgia-vote-election-rt-lv-241016_1729122226491_hpMain_16x9.jpg?w=1600",
    publishedAt: "2024-10-16T23:59:27Z",
    content:
      'One day after a Georgia judge invalidated the state\'s controversial "hand count" rule, a separate judge Wednesday evening invalidated even more rules that were passed by the Republican-led state elec… [+1239 chars]',
  },
  {
    source: {
      id: null,
      name: "Ahti.space",
    },
    author: null,
    title: "Self-referential variable initialization in C",
    description: "Comments",
    url: "https://microblog.ahti.space/nortti/self-referential-initialization-c/",
    urlToImage: null,
    publishedAt: "2024-10-14T01:34:42Z",
    content:
      "2024-10-11I was reading the SDL Shader Language\r\nQuickstart,\r\nwhich (at the moment) mostly consists of explanations about how the\r\nlanguage differs from C.\r\nOne difference listed caught my eye: varia… [+1357 chars]",
  },
  {
    source: {
      id: null,
      name: "Terinstock.com",
    },
    author: "Terin Stock",
    title: "Assembling a Game Boy Game with Meson",
    description: "Adding a new 'language' to the Meson build system for RGBDS.",
    url: "https://terinstock.com/post/2024/10/Assembling-a-Game-Boy-Game-with-Meson/",
    urlToImage:
      "https://terinstock.com/media/52/1726b132b398a4215c6b7a75f6d5e1226da4a3b7817414768800533764ada6.png",
    publishedAt: "2024-11-08T23:59:18Z",
    content:
      "I’ve been working on a Game Boy game off-and-on for the last few months (hopefully more details about this soon!). Up until recently I was building the game with GNU Make, but I was frustrated with c… [+6364 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5Mac",
    },
    author: "Ryan Christoffel",
    title:
      "iPhone SE isn’t known for new tech, but one cutting edge upgrade is coming",
    description:
      "No one knows what the ‘SE’ in iPhone SE really stands for. But we do know one thing: Apple’s SE devices aren’t known for introducing brand new tech. That’s set to change this spring, though, when the new iPhone SE is expected to come with one cutting edge upg…",
    url: "https://9to5mac.com/2024/10/16/iphone-se-isnt-known-for-new-tech-but-one-cutting-edge-upgrade-is-coming/",
    urlToImage:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/2025-iPhone-SE.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-10-16T19:17:35Z",
    content:
      "No one knows what the SE in iPhone SE really stands for. But we do know one thing: Apples SE devices arent known for introducing brand new tech. Thats set to change this spring, though, when the new … [+2291 chars]",
  },
  {
    source: {
      id: null,
      name: "Circle-lang.org",
    },
    author: null,
    title: "Why Safety Profiles Failed",
    description: "Comments",
    url: "https://www.circle-lang.org/draft-profiles.html",
    urlToImage: null,
    publishedAt: "2024-10-24T21:26:09Z",
    content:
      "1 Abstract\r\nAs for dangling pointers and for ownership, this model\r\ndetects all possible errors. This means that we can guarantee\r\nthat a program is free of uses of invalidated pointers.\r\n A brief in… [+36931 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "David Lawder",
    title:
      "IMF lifts US growth forecast but marks down China; sees lackluster global economy",
    description:
      "The International Monetary Fund on Tuesday raised its 2024 economic growth forecasts for the U.S., Brazil and Britain but cut them for China, Japan and the...",
    url: "https://uk.finance.yahoo.com/news/imf-lifts-us-growth-forecast-130301388.html",
    urlToImage:
      "https://media.zenfs.com/en/reuters.com/eee1055606f8f11edda9b27a2526909c",
    publishedAt: "2024-10-22T13:03:01Z",
    content:
      "By David Lawder\r\nWASHINGTON (Reuters) - The International Monetary Fund on Tuesday raised its 2024 economic growth forecasts for the U.S., Brazil and Britain but cut them for China, Japan and the eur… [+4753 chars]",
  },
  {
    source: {
      id: null,
      name: "Habr.com",
    },
    author: "shengnan",
    title:
      "Дуалистичная типовая система JavaScript VS Единая объектная система Python. Краткий обзор",
    description:
      "Сегодня поговорим о объектах, объектной архитектуре и способах взаимодействия с ними на примере языков программирования Python и JavaScript. Получилось небольшое исследование, противопоставляющее прототипирование и ООП.Давайте разбираться! Читать далее",
    url: "https://habr.com/ru/articles/853760/#post-content-body",
    urlToImage:
      "https://habr.com/share/publication/853760/e999a4af39370fe6bed6e32c9edd1263/",
    publishedAt: "2024-10-27T07:10:11Z",
    content:
      ", !\r\n Python JavaScript. , . , , .\r\n . - ( , ), / - , . \r\n ! \r\n, , « » : \r\n<ul><li> JS \r\n</li><li>- (Python)\r\n</li><li>, (, Go, Rust)\r\n</li></ul> , Python JavaScript.\r\n JavaScript\r\n JavaScript : ( ) … [+1970 chars]",
  },
  {
    source: {
      id: null,
      name: "Hackaday",
    },
    author: "Jonathan Bennett",
    title:
      "This Week in Security: Quantum RSA Break, Out of Scope, and Spoofing Packets",
    description:
      "Depending on who you ask, the big news this week is that quantum computing researchers out of China have broken RSA. And that’s true… sort of. There are multiple caveats, like the fact …",
    url: "https://hackaday.com/2024/10/18/this-week-in-security-quantum-rsa-break-out-of-scope-and-spoofing-packets/",
    urlToImage: "https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg",
    publishedAt: "2024-10-18T14:00:38Z",
    content:
      "Depending on who you ask, the big news this week is that quantum computing researchers out of China have broken RSA. And that’s true… sort of. There are multiple caveats, like the fact that this proo… [+7280 chars]",
  },
  {
    source: {
      id: null,
      name: "Microsoft.com",
    },
    author: "Raymond Chen",
    title:
      "On the limits of time travel in the face of undefined behavior in C",
    description:
      "C imposes some constraints, but the principle is mostly still there.\nThe post On the limits of time travel in the face of undefined behavior in C appeared first on The Old New Thing.",
    url: "https://devblogs.microsoft.com/oldnewthing/20241104-00/?p=110466",
    urlToImage:
      "https://devblogs.microsoft.com/oldnewthing/wp-content/uploads/sites/38/2019/02/ShowCover.jpg",
    publishedAt: "2024-11-04T15:00:00Z",
    content:
      "Some time ago, I noted that undefined behavior can result in time travel. Specifically, that once undefined behavior occurs, the undefined behavior extends to the entire program, even the parts that … [+2023 chars]",
  },
  {
    source: {
      id: null,
      name: "Igalia.com",
    },
    author: null,
    title: "Compiling Bigloo Scheme to WebAssembly",
    description:
      "An exploration of compiling Scheme and potentially JavaScript to WebAssembly.",
    url: "https://blogs.igalia.com/compilers/2023/05/10/compiling-bigloo-scheme-to-webassembly/",
    urlToImage: null,
    publishedAt: "2024-10-16T04:14:59Z",
    content:
      "Compiling Bigloo Scheme to WebAssembly\r\nIn the JavaScript world, browser implementations have focused on JIT compilation as a high-performance implementation technique. Recently, new applications of … [+13499 chars]",
  },
  {
    source: {
      id: null,
      name: "Thoughtcatalog.com",
    },
    author: "Molly Burford",
    title:
      "7 Signs You’re In A Situationship (And It Won’t Become Something More)",
    description:
      "A situationship is considered to be a casual, undefined relationship that can actually be harder to define than you might realize. The reason you may not realize you’re in a situationship, as…",
    url: "https://thoughtcatalog.com/molly-burford/2024/11/7-signs-youre-in-a-situationship-and-it-wont-become-something-more/",
    urlToImage:
      "https://thoughtcatalog.com/wp-content/uploads/2024/10/pexels-katerina-holmes-5911127.jpg?w=1536&h=768&crop=1",
    publishedAt: "2024-11-12T10:28:09Z",
    content:
      "A situationship is considered to be a casual, undefined relationship that can actually be harder to define than you might realize. The reason you may not realize youre in a situationship, as opposed … [+3218 chars]",
  },
  {
    source: {
      id: null,
      name: "Github.io",
    },
    author: null,
    title: "Local Peer-to-Peer API Draft Community Group Report",
    description: "Comments",
    url: "https://WICG.github.io/local-peer-to-peer/",
    urlToImage: null,
    publishedAt: "2024-11-04T21:40:51Z",
    content:
      "Note: This specification is under active development and therefore incomplete. If youre looking for an overview of the proposal, please refer to the Explainer.\r\nThis section is non-normative.\r\nThe Lo… [+25315 chars]",
  },
  {
    source: {
      id: null,
      name: "Livedoor.biz",
    },
    author: "news4vip2",
    title: "【画像】広瀬すずさん、また大胆な衣装を着させられるｗｗｗ",
    description:
      "1: 以下、ニュー速クオリティでお送りします  2023/10/03(火) 06:48:19.31 ID:l3Y8ctjba  えっっっ    https://video.twimg.com/ext_tw_video/1708841925472837632/pu/vid/avc1/720x1280/wlHkcu9iGI8xnADe.mp4?tag=12  引用元: ・undefined",
    url: "https://news4vip.livedoor.biz/archives/52540589.html",
    urlToImage: "https://livedoor.blogimg.jp/news4vip2/imgs/1/6/16ec0f87.jpg",
    publishedAt: "2024-11-04T23:30:47Z",
    content: "1: 2023/10/03() 06:48:19.31 ID:l3Y8ctjba",
  },
  {
    source: {
      id: null,
      name: "Cheezburger.com",
    },
    author: "Laurent Shinar, Laurent Shinar",
    title:
      "26 Giggle-Worthy Cat Memes That Are Best Paired with a Day of Rotting in Bed",
    description:
      "For some people the weekend represents an opportunity to get out into the world, spread their wings and explore the splendor that this enigmatic Earth has to offer us. However, for the rest of us, the weekend represents a welcome respite from the troubles and…",
    url: "https://cheezburger.com/37449989/26-giggle-worthy-cat-memes-that-are-best-paired-with-a-day-of-rotting-in-bed",
    urlToImage:
      "https://i.chzbgr.com/original/37449989/h13E59CE2/its-side-looking-sassy-me-thinking-about-having-a-little-snack-five-minutes-after-i-said-i-was-full",
    publishedAt: "2024-10-26T18:00:00Z",
    content:
      "For some people the weekend represents an opportunity to get out into the world, spread their wings and explore the splendor that this enigmatic Earth has to offer us. However, for the rest of us, th… [+744 chars]",
  },
  {
    source: {
      id: null,
      name: "Habr.com",
    },
    author: "PatientZero",
    title: "[Перевод] Насколько быстры B-деревья по сравнению с хэш-таблицами?",
    description:
      "Во многих «скриптовых» языках для стандартных ассоциативных структур данных используется хэш-таблица (hashmap) (объекты Javascript, словари Python и так далее). Хэш-таблицы обладают множеством раздражающих свойств:\n\n<ul>\n<li>Уязвимость к hash flooding. </li>\n…",
    url: "https://habr.com/ru/articles/849654/#post-content-body",
    urlToImage:
      "https://habr.com/share/publication/849654/ac7cea3ec951a66f5aa4219db8cf19db/",
    publishedAt: "2024-10-22T07:17:20Z",
    content:
      "«» - (hashmap) ( Javascript, Python ). - :<ul><li>hash flooding. </li><li> hash flooding seed , , .</li><li> , - .</li><li> wasm, , unmapping.</li><li> wasm , AES . - .</li></ul>B- . -, , . :\r\nintege… [+5994 chars]",
  },
  {
    source: {
      id: null,
      name: "Habr.com",
    },
    author: "AiratGl",
    title: "Разыменовываем NULL на RISC-V ядре scr1",
    description:
      "Во время работы в ASIC дизайн центре я потратил немало времени на отладку ошибок и падений ядра, просматривая временные диаграммы на шинах AXI от процессора к памяти. Иногда оказывалось, что адрес чтения из памяти оказывался 0x00000000 - классический случай р…",
    url: "https://habr.com/ru/articles/851188/#post-content-body",
    urlToImage:
      "https://habrastorage.org/getpro/habr/upload_files/3e8/2d5/0c3/3e82d50c30e6a01f0ff8e5b8830c8d60.png",
    publishedAt: "2024-10-16T16:28:50Z",
    content:
      "ASIC , AXI . , 0x00000000 - C. C segfault-. bare metal NULL . , NULL, open source RISC-V scr1 open source RTL Verilator.\r\nUbuntu 22.04. :\r\nVerilator - . HDL C++ . : https://verilator.org/guide/latest… [+6276 chars]",
  },
  {
    source: {
      id: null,
      name: "Quartz India",
    },
    author: "William Gavin",
    title: "No, Elon Musk's Tesla didn't buy Ford",
    description:
      "Despite what content farms on YouTube and other platforms want you to believe, Elon Musk’s Tesla (TSLA) is not buying Ford Motor Co. (F) Read more...",
    url: "https://qz.com/elon-musk-tesla-ford-ai-jeep-stellantis-fact-check-1851694625",
    urlToImage:
      "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9d046a6631a38a0581548673fa34e6d7.jpg",
    publishedAt: "2024-11-11T13:19:00Z",
    content:
      "In This Story\r\nDespite what content farms on YouTube and other platforms want you to believe, Elon Musks Tesla (TSLA+8.11%\r\n) is not buying Ford Motor Co. (F-0.05%\r\n)\r\nAlthough it should really go wi… [+1764 chars]",
  },
  {
    source: {
      id: null,
      name: "HYPEBEAST",
    },
    author: "info@hypebeast.com (Hypebeast)",
    title:
      "Olafur Eliasson's 'Lifeworld' Brings Blurred Perspectives to Major Cities",
    description:
      "Olafur Eliasson’s latest project, Lifeworld, transforms major city screens into abstract visual landscapes, marking a significant partnership between CIRCA and WeTransfer. Launched on October 1, the digital art installation is appearing nightly at 20:24 on sc…",
    url: "https://hypebeast.com/2024/11/olafur-eliasson-lifeworld-installation-wetransfer-circa",
    urlToImage:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F11%2F05%2Folafur-eliasson-lifeworld-installation-wetransfer-circa-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    publishedAt: "2024-11-05T18:21:18Z",
    content:
      "Olafur Eliassons latest project, Lifeworld, transforms major city screens into abstract visual landscapes, marking a significant partnership between CIRCA and WeTransfer. Launched on October 1, the d… [+3838 chars]",
  },
  {
    source: {
      id: null,
      name: "Livedoor.biz",
    },
    author: "news4vip2",
    title: "【画像】最もカッコいい魚、決まるｗｗｗｗｗ",
    description:
      "1: 以下、ニュー速クオリティでお送りします  2022/08/28(日) 13:21:36.90 ID:UC39x2Dt0  ぎょぎょ！？  やっぱりカッコいい魚No1はこいつ      引用元: ・undefined",
    url: "https://news4vip.livedoor.biz/archives/52540841.html",
    urlToImage: "https://livedoor.blogimg.jp/news4vip2/imgs/1/0/10eb2198.png",
    publishedAt: "2024-11-08T22:30:04Z",
    content: "1: 2022/08/28() 13:21:36.90 ID:UC39x2Dt0",
  },
  {
    source: {
      id: null,
      name: "Cedardb.com",
    },
    author: null,
    title: "How to Correctly Sum Up Numbers",
    description:
      "When you learn programming, one of the first things every book and course teaches is how to add two numbers. So, developers working with large data probably don't have to think too much about adding numbers, right? Turns out it's not quite so simple!",
    url: "https://cedardb.com/blog/overflow_handling/",
    urlToImage: "https://cedardb.com/blog/overflow_handling/overflow.jpg",
    publishedAt: "2024-10-31T09:07:17Z",
    content:
      "One of the first examples for loops in probably every programming language course is taking a list of numbers and calculating the sum of them.\r\nAnd in every programming language, it’s trivial to writ… [+11547 chars]",
  },
  {
    source: {
      id: null,
      name: "Github.io",
    },
    author: null,
    title: 'Perhaps Rust Needs "Defer"',
    description: "Comments",
    url: "https://gaultier.github.io/blog/perhaps_rust_needs_defer.html",
    urlToImage: null,
    publishedAt: "2024-11-06T08:30:26Z",
    content:
      "Back to all articles\r\nPublished on 2024-11-06\r\nTable of contentsOr, how FFI in Rust is a pain in the neck.\r\nDiscussions: /r/rust, /r/programming\r\nIn a previous article I mentioned that we use the def… [+17094 chars]",
  },
  {
    source: {
      id: null,
      name: "Impress.co.jp",
    },
    author: "村上タクタ",
    title:
      "UGREENの厳選アイテムが最大35％OFF、さらに読者限定クーポンコードも!! Amazonプライム感謝祭先行セール[Sponsored]",
    description:
      "Amazon.co.jpでは、10月19日から実施されるプライム会員限定のビッグセール「プライム感謝祭」に先駆けた先行セールを実施中だ。その一環として、UGREENストアページでは同社のモバイルバッテリーなどがセール価格で販売されている。なお、プライム感謝祭でも先行セールと同価格にて販売されるとのこと。",
    url: "https://internet.watch.impress.co.jp/docs/topic/special/1629729.html",
    urlToImage:
      "https://internet.watch.impress.co.jp/img/iw/list/1629/729/000.png",
    publishedAt: "2024-10-16T21:00:00Z",
    content:
      "Amazon.co.jp1019UGREEN\r\n 5OFFUGPRIME035 \r\n145W25000mAh\r\n PD3.1 145W 25000mAh25000mAh145WUSB PDUSB Type-C×2USB Type-A×1140WMacBook AirM21390iPhone 155.29985 \r\nGaNInfinity65WPD\r\n NexodeX 65W USB Type-C… [+569 chars]",
  },
  {
    source: {
      id: null,
      name: "Javacodegeeks.com",
    },
    author: "Eleftheria Drosopoulou",
    title: "JavaScript Hoisting Pitfalls: Common Scoping Issues",
    description:
      "Hoisting in JavaScript is a unique mechanism that moves declarations to the top of the current scope (either function or global scope) during the compilation phase. This can lead to unexpected behaviors, especially if you’re not fully familiar with how hoisti…",
    url: "https://www.javacodegeeks.com/2024/10/javascript-hoisting-pitfalls-common-scoping-issues.html",
    urlToImage:
      "https://www.javacodegeeks.com/wp-content/uploads/2014/01/javascript-logo.jpg",
    publishedAt: "2024-10-28T06:47:00Z",
    content:
      "Hoisting in JavaScript is a unique mechanism that moves declarations to the top of the current scope (either function or global scope) during the compilation phase. This can lead to unexpected behavi… [+3919 chars]",
  },
  {
    source: {
      id: null,
      name: "Xxiivv.com",
    },
    author: null,
    title: "Now lie in it: an uxntal retrospective",
    description: "Comments",
    url: "https://wiki.xxiivv.com/site/now_lie_in_it.html",
    urlToImage: null,
    publishedAt: "2024-11-01T17:28:03Z",
    content:
      "Autumn is just around the corner, and when the leaves begin to fall, it will\r\nhave been four years since the early sketches of a\r\npersonal computing system which became Uxn. I thought it\r\nwould be in… [+6856 chars]",
  },
  {
    source: {
      id: null,
      name: "Kk.org",
    },
    author: "claudia",
    title: "What is something you have that you wished everyone had?",
    description: "Just One Question #6",
    url: "https://kk.org/cooltools/what-is-something-you-have-that-you-wished-everyone-had/",
    urlToImage: null,
    publishedAt: "2024-10-19T16:00:00Z",
    content:
      "To participate in Just 1 Question, and receive the issues one week early, sign up here.\r\nWhen you leave the house, take a sketchbook\r\nI wish everyone had a small sketchbook to carry around. Even the … [+3754 chars]",
  },
  {
    source: {
      id: null,
      name: "PC-WELT",
    },
    author: "Author: Laura Pippig",
    title:
      "Logitech POP Icon Combo review: Colorful keyboard & mouse with really smart functions",
    description:
      "Macworld\n\n\n\r\n\n\n\nAt a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Great looks</li>\n\n\n\n<li>Nice key feel and quiet keystroke</li>\n\n\n\n<li>Smart functions for AI and multitasking</li>\n\n\n\n<li>Long battery life</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Slightly cramped layout<…",
    url: "https://www.pcwelt.de/article/2491600/logitech-pop-icon-combo-test.html",
    urlToImage:
      "https://www.macworld.com/wp-content/uploads/2024/11/Logitech-Pop-Icon-Combo.png?w=1024",
    publishedAt: "2024-11-06T12:09:21Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>G… [+6005 chars]",
  },
  {
    source: {
      id: "time",
      name: "Time",
    },
    author: "Victoria Malloy and Video by Andrew D. Johnson",
    title: "Fighting Florida’s Invasive Python Problem One Step at a Time",
    description:
      "Shoe company P448 has become an unlikely ally in the battle to tackle invasive species by turning snakeskin into shoes.",
    url: "https://time.com/7086199/florida-invasive-python-problem-p448-shoes/",
    urlToImage:
      "https://api.time.com/wp-content/uploads/2024/10/P448-Python-17836-1.1.jpg?quality=85&w=1200&h=628&crop=1",
    publishedAt: "2024-10-15T14:55:34Z",
    content:
      "Despite miles of ground covered as we drove through the Everglades under the cover of darkness, it was impossible to ignore the fact that we hadnt spotted a single mammal. The expansive wetlands in S… [+15850 chars]",
  },
  {
    source: {
      id: null,
      name: "Wanderinghorse.net",
    },
    author: null,
    title: "Cwal: Scripting Engine Without a Language",
    description: "Comments",
    url: "https://fossil.wanderinghorse.net/r/cwal/home",
    urlToImage: null,
    publishedAt: "2024-10-14T10:28:45Z",
    content:
      'cwal (pronounced "sea wall") is a scripting engine/garbage-collection\r\nlibrary implemented in C (which is where the\r\n"c" comes from - its original name was "sewal"). cwal itself does not\r\nprovide a s… [+10393 chars]',
  },
  {
    source: {
      id: null,
      name: "Isocpp.org",
    },
    author: "Andrey Karpov",
    title: "C++ programmer's guide to undefined behavior: part 8 of 11",
    description:
      "Your attention is invited to the eighth part of an e-book on undefined behavior. This is not a textbook, as it's intended for those who are already familiar with C++ programming. It's a kind of C++ programmer's guide to undefined behavior and to its most secr…",
    url: "https://isocpp.org//blog/2024/11/cpp-programmers-guide-to-undefined-behavior-part-8-of-11",
    urlToImage: null,
    publishedAt: "2024-11-01T12:35:24Z",
    content:
      "Meeting C++\r\nNovember 14-16, Berlin, Germany\r\nISO C++ standards meeting\r\nNovember 18-23, Wrocław, Poland\r\ncode::dive\r\nNovember 25, Wrocław, Poland\r\nISO C++ standards meeting\r\nFebruary 10-15, Hagenber… [+144 chars]",
  },
  {
    source: {
      id: null,
      name: "ArchDaily",
    },
    author: "韩爽 - HAN Shuang",
    title: "Sun Tower / OPEN Architecture",
    description:
      'Designed by OPEN Architecture, Sun Tower is an oceanfront public cultural facility in Yantai Yeda Development Zone, featuring outdoor theater, digital exhibition spaces, library, café and bar. Atop the summit is a unique semi-outdoor "Phenomena Space". Archeo…',
    url: "https://www.archdaily.com/1023114/sun-tower-open-architecture",
    urlToImage:
      "https://images.adsttc.com/media/images/6728/9306/3dfd/b459/4124/5684/large_jpg/sun-tower-open-architecture_5.jpg?1730712338",
    publishedAt: "2024-11-05T07:00:00Z",
    content:
      "© Iwan Baan\r\n+ 31\r\n<ul><li>Principals In Charge: LI Hu, HUANG Wenjing\r\n</li><li>Project Team: Design Phase: CAO Mengxing, LIU Xiaoyang, Daijiro NAKAYAMA, LU Di, WEN Peng, WEI Zihao, ZHANG Ziyao, LIN … [+5305 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "咖啡机（K.F.J）",
    title: "带团队后的日常思考（十六） - 咖啡机（K.F.J）",
    description:
      "一、日常问题 1）临时小需求 在日常研发过程中，难免会临时加些小需求，例如增加个标识、字体换个颜色、间距增加等。 这类需求虽然不复杂，但是很多时候都会打乱自己的开发节奏。 最近我收到个修改需求，来来回回改了四次。因为只是和我口述了下需求，我按照口述修改。 后面测试就发现了些场景需要过滤，再马上修复。",
    url: "https://www.cnblogs.com/strick/p/18406625",
    urlToImage: null,
    publishedAt: "2024-11-07T02:05:00Z",
    content:
      "1\r\n2\r\n Node getaddrinfo ENOTFOUND xxx\r\n Node Pod \r\ntry-catch catch \r\n undefined pod \r\n 23 pod \r\n Pod CPU \r\n3CPU\r\n 10 8 3 CPU 60%\r\n delete 10 CPU \r\nDELETEFROM `web_monitor` WHERE `ctime` &lt;='2024-10… [+157 chars]",
  },
  {
    source: {
      id: null,
      name: "Juxtapoz.com",
    },
    author: "Editor@juxtapoz.com (Editor -- Evan)",
    title:
      "Interview: Angela Burson’s Latest Paintings Encounter the Strange, the Uncanny, the Unknown",
    description:
      "What do we take away from an encounter with a stranger? Generally speaking, theWhat do we take away from an encounter with a stranger? Generally speaking, theoddities—the aspects of the encounter that are unsettling, abnormal. In her latest solo exhibition Cl…",
    url: "https://www.juxtapoz.com/news/magazine/interview-angela-burson-s-latest-paintings-encounter-the-strange-the-uncanny-the-unknown/",
    urlToImage:
      "https://www.juxtapoz.com/media/k2/items/cache/65636e3e9a47cb828e17a5e344a8eed3_L.jpg?t=1728918566",
    publishedAt: "2024-10-15T07:47:04Z",
    content:
      "What do we take away from an encounter with a stranger? Generally speaking, theWhat do we take away from an encounter with a stranger? Generally speaking, theoddities—the aspects of the encounter tha… [+8086 chars]",
  },
  {
    source: {
      id: null,
      name: "Classmethod.jp",
    },
    author: "岩田智哉",
    title: "Prismaのコネクションプール関連のパラメータについて確認してみた",
    description:
      "Prismaのコネクションプール関連のパラメータについて確認してみた",
    url: "https://dev.classmethod.jp/articles/prisma-engines-connection-pooling-parameters/",
    urlToImage:
      "https://images.ctfassets.net/ct0aopd36mqt/wp-thumbnail-9447034b816ea26dda021481e3370c97/852593bd37bd413ffd07622643655a06/prisma-logo.png",
    publishedAt: "2024-11-13T08:15:43Z",
    content:
      "@\r\nPrismaMySQL\r\nPrisma\r\n<ul><li>clientVersion: 5.15.0</li><li>engineVersion: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022</li></ul> Prisma\r\nPrisma\r\n'mysql://prisma:prisma@127.0.0.1:3306/mysql?&lt;1&gt;=&… [+8079 chars]",
  },
  {
    source: {
      id: null,
      name: "Zuplo.com",
    },
    author: "Adrian Machado",
    title: "JSON Patch",
    description:
      "JSON Patch is a simple, efficient, and standardized way to apply partial updates to JSON documents, especially over HTTP",
    url: "https://zuplo.com/blog/2024/10/10/unlocking-the-power-of-json-patch",
    urlToImage:
      "https://zuplo.com/og?text=Unlocking%20the%20Power%20of%20JSON%20Patch",
    publishedAt: "2024-10-17T17:46:17Z",
    content:
      "October 10, 2024JSON Patch is a standardized format defined in\r\nRFC 6902 for describing how to\r\nmodify a JSON document. It was created to address the need for a simple,\r\nefficient, and standardized w… [+12954 chars]",
  },
  {
    source: {
      id: null,
      name: "Mediaite",
    },
    author: "Ahmad Austin Jr.",
    title:
      "University of Florida Basketball Coach Accused of Stalking and Harassing ‘Undefined’ Number of Women",
    description:
      'University of Florida men\'s basketball head coach Todd Golden has been accused of sexual harassment and stalking by an "undefined" number of women.\nThe post University of Florida Basketball Coach Accused of Stalking and Harassing ‘Undefined’ Number of Women f…',
    url: "https://www.mediaite.com/sports/university-of-florida-basketball-coach-accused-of-stalking-and-harassing-undefined-number-of-women/",
    urlToImage:
      "https://www.mediaite.com/wp-content/uploads/2024/11/AP24310682304267-scaled.jpg",
    publishedAt: "2024-11-08T21:30:02Z",
    content:
      "Gary McCullough/AP\r\nUniversity of Florida men’s basketball head coach Todd Golden has been accused of sexual harassment and stalking by an “undefined” number of women.\r\nAccording to Title IX document… [+1821 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Jon L. Jacobi",
    title: "Samsung 990 EVO Plus SSD review: Hybrid PCIe 4/5 HMB evolves",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Very good everyday performance</li>\n\n\n\n<li>Affordable for Samsung</li>\n\n\n\n<li>Five-year warranty and good TBW rating</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Slows on the 450GB write to 1.2GBps</li>\n\n\n\n<li>Pricier than so…",
    url: "https://www.pcworld.com/article/2490751/samsung-990-evo-plus-ssd-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/Samsung-990-Evo-Plus-1.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-23T10:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>V… [+4533 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Henry Flynn, Contributor, \n Henry Flynn, Contributor\n https://www.forbes.com/sites/henryflynn/",
    title: "Sevilla Seeks Identity; Belgium Forward Dodi Lukebakio Can Help",
    description:
      "Belgium winger Dodi Lukebakio is the player to lead Sevilla forward amid a difficult time for the La Liga club on and off the field.",
    url: "https://www.forbes.com/sites/henryflynn/2024/10/26/sevilla-seeks-identity-belgium-forward-dodi-lukebakio-can-help/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/671cbf263352580c7f1b7d35/0x0.jpg?format=jpg&crop=4118,2315,x0,y430,safe&height=900&width=1600&fit=bounds",
    publishedAt: "2024-10-26T17:26:21Z",
    content:
      "Lukebakio brings a certain directness to Sevilla's play.\r\nGetty Images\r\nSevilla is a shadow of the soccer club it once was.\r\nAnd that was not long ago. In 2023, the Nervión team won a record-extendin… [+2964 chars]",
  },
  {
    source: {
      id: null,
      name: "Alicekeeler.com",
    },
    author: "Alice Keeler",
    title: "Time to Ditch the Social Media Algorithm",
    description:
      "Remember the good old days of Twitter when you could jump on really quick and get some positive encouragement or teaching ideas? Things seem to have gone downhill a bit on the site formerly known as Twitter (I will never call it X). It’s time to ditch the soc…",
    url: "https://alicekeeler.com/2024/11/13/time-to-ditch-the-social-media-algorithm/",
    urlToImage:
      "https://alicekeeler.com/wp-content/uploads/2024/11/deck-dot-blue-1024x576.png",
    publishedAt: "2024-11-13T15:51:09Z",
    content:
      'Warning: Undefined array key "background_image" in /www/teachertech_682/public/wp-content/plugins/elementor/includes/conditions.php on line 87Warning: Trying to access array offset on value of type n… [+1000 chars]',
  },
  {
    source: {
      id: null,
      name: "Hatenablog.com",
    },
    author: null,
    title:
      "TypeScript 5.8で条件付き戻り値型に対するナローイングができるようになりそう（特定の制約を満たす場合） - Mitsuyuki.Shiiba",
    description:
      "数日前にTypeScript 5.7 RCがアナウンスされてリリースが楽しみだなー！ってところなんだけど、そのさらに数日前に、ウォッチしていたこのPR↓がマージされてTypeScript 5.8.0のマイルストーンに入った。わー！ これが今日のお話。TypeScript 5.8.0でConditional return type narrowingが入りそう。楽しみ！ Conditional return type narrowing? 直訳すると「条件付き戻り値型の絞り込み」かな。引数の型によって戻り値の型が変…",
    url: "https://bufferings.hatenablog.com/entry/2024/11/11/232139",
    urlToImage:
      "https://ogimage.blog.st-hatena.com/12704346814673909441/6802418398302001046/1731335451",
    publishedAt: "2024-11-11T22:38:11Z",
    content:
      "TypeScript 5.7 RCPRTypeScript 5.8.0\r\nTypeScript 5.8.0Conditional return type narrowing\r\nConditional return type narrowing?\r\ndeclareconst record: Record&lt;string, string[]&gt;;\r\ndeclareconst array: s… [+829 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "龙儿筝",
    title: "鸿蒙Navigation处理启动页跳转到首页问题 - 龙儿筝",
    description:
      "在使用Navigation时时，你是否遇到了这样一个问题，Navigation加载启动页为入口，在启动页replace到首页，使首页替换换启动页，结果发现不生效，启动页依然存在。 为什么根页面启动页不能直接替换成首页 我们验证后发现当页面是Navigation的子页面时，是可以使用replace替换",
    url: "https://www.cnblogs.com/zhaloe/p/18517371",
    urlToImage: null,
    publishedAt: "2024-10-31T03:34:00Z",
    content:
      "NavigationNavigationreplace\r\nNavigationreplaceNavPathStackNavPathStackreplacepushpop\r\nNavigation\r\nNavigationrouterNavigationrouterrouternavigation\r\nNavigationNavigationV2\r\n@Entry\r\n@ComponentV2\r\nstruc… [+655 chars]",
  },
  {
    source: {
      id: null,
      name: "Open-std.org",
    },
    author: null,
    title: "Memory Safety Without Lifetime Parameters",
    description: "Comments",
    url: "https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3444r0.html",
    urlToImage: null,
    publishedAt: "2024-10-21T01:06:11Z",
    content:
      "1 Abstract\r\nThis proposal describes the implementation of a memory-safe reference\r\ntype that does not use lifetime annotations. The goal of the proposal is\r\nto:\r\n<ol><li>Explore the viability of memo… [+35369 chars]",
  },
  {
    source: {
      id: null,
      name: "ArchDaily",
    },
    author: "Enrique Tovar",
    title:
      "Tijuana-San Diego as a Creative Beacon: Exploring the World Design Capital's Growing Influence",
    description:
      "Global conferences, events, and exhibitions have profoundly influenced the evolution of architecture and design, serving as catalysts for innovation, new ideas, and pivotal debates. Some gatherings, like the historic Congrès International d'Architecture Moder…",
    url: "https://www.archdaily.com/1023090/tijuana-san-diego-as-a-creative-beacon-exploring-the-world-design-capitals-growing-influence",
    urlToImage:
      "https://images.adsttc.com/media/images/6725/4265/abb6/a21e/9e58/c3f1/large_jpg/tijuana-san-diego-as-a-creative-beacon-insights-into-the-developing-impact-of-the-wdc-designation_1.jpg?1730495175",
    publishedAt: "2024-11-05T07:30:00Z",
    content:
      "Exchange Pavilion. Image © Paco Alvarez, Recording Architecture\r\nGlobal conferences, events, and exhibitions have profoundly influenced the evolution of architecture and design, serving as catalysts … [+9535 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "前端欧阳",
    title: "让性能提升56%的Vue3.5响应式重构之“版本计数” - 前端欧阳",
    description:
      "前言 Vue3.5响应式重构主要分为两部分：双向链表和版本计数。在上一篇文章中我们讲了 双向链表 ，这篇文章我们接着来讲版本计数。 欧阳年底也要毕业了，加入欧阳的面试交流群（分享内推信息）、高质量vue源码交流群 版本计数 看这篇文章之前最好先看一下欧阳之前写的 双向链表 文章，不然有些部分可能看着",
    url: "https://www.cnblogs.com/heavenYJJ/p/18529274",
    urlToImage: null,
    publishedAt: "2024-11-06T01:30:00Z",
    content:
      "Vue3.5\r\nvue\r\nSubDepLink\r\n<ul><li>SubwatchEffectwatchrendercomputed\r\n</li><li>Deprefreactivecomputed\r\n</li><li>LinkSubDepSubDepLinkDepSubLink\r\n</li></ul>computedSubDepcomputedwatchEffectcomputed\r\ncomp… [+8376 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Mattias Inghe",
    title:
      "HyperX QuadCast 2 review: A brilliant USB microphone gets even better",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Excellent sound quality for voices</li>\n\n\n\n<li>High sampling rate and bit depth for recording</li>\n\n\n\n<li>Wide compatibility</li>\n\n\n\n<li>More versatile light control</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>New multi-cont…",
    url: "https://www.pcworld.com/article/2509663/hyperx-quadcast-2-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/PXL_20241024_081612892.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-08T15:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>E… [+7068 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Jon L. Jacobi",
    title:
      "TerraMaster D8 Hybrid enclosure review: Versatile, vast, USB storage",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Eight bays/slots for HDDs and SSDs</li>\n\n\n\n<li>Supports SATA and NVMe</li>\n\n\n\n<li>Runs two HDDs in RAID</li>\n\n\n\n<li>Affordable for the ilk</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>10Gbps caps NVMe performance at 1GBps</li…",
    url: "https://www.pcworld.com/article/2487681/terramaster-d8-hybrid-enclosure-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/TerraMaster-D8-Hybrid-hero-b.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-28T14:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>E… [+6630 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Laura Pippig",
    title:
      "Fractal Design Refine review: A wonderful chair for long gaming sessions",
    description:
      "Fractal Design RefineExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Super ergonomic</li>\n\n\n\n<li>Very comfortable</li>\n\n\n\n<li>Many adjustment options</li>\n\n\n\n<li>Customization lumbar support</li>\n\n\n\n<li>Great neck cushion made of memory foam</li>\n\n\n\n<li>Pleasant fabric co…",
    url: "https://www.pcworld.com/article/2501821/fractal-design-refine-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/Fractal-Design-Refine.png?w=1024",
    publishedAt: "2024-11-04T15:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nFractal Design Refin… [+6508 chars]",
  },
  {
    source: {
      id: null,
      name: "Theregister.com",
    },
    author: "Thomas Claburn",
    title: "To kill memory safety bugs in C code, try the TrapC fork",
    description:
      "Memory-safe variant is planned for next year\nExclusive C and C++ programmers may not need to learn Rust after all to participate in the push for memory safety.…",
    url: "https://www.theregister.com/2024/11/12/trapc_memory_safe_fork/",
    urlToImage: "https://regmedia.co.uk/2022/03/23/shutterstock_c.jpg",
    publishedAt: "2024-11-12T14:31:08Z",
    content:
      "Exclusive C and C++ programmers may not need to learn Rust after all to participate in the push for memory safety.\r\nSpeaking to us remotely from the W2140 conference in Bangkok, Thailand - which star… [+11861 chars]",
  },
  {
    source: {
      id: null,
      name: "Automaton-media.com",
    },
    author: "Taijiro Yamanaka",
    title:
      "沈没世界オープンワールドサバイバル『Undefined Survivors』Steamで正式お披露目、年内に早期アクセス配信へ。かつての文明が沈んだ海を探索してサバイバル",
    description:
      "Runpathは10月17日、『Undefined Survivors』のSteamストアページを公開し、本作の概要を発表した。本作は、PC（Steam）向けに2024年内に早期アクセス配信予定。\n沈没世界オープンワールドサバイバル『Undefined Survivors』Steamで正式お披露目、年内に早期アクセス配信へ。かつての文明が沈んだ海を探索してサバイバル",
    url: "https://automaton-media.com/articles/newsjp/undefinedsurvivors-20241017-314784/",
    urlToImage:
      "https://automaton-media.com/wp-content/uploads/2024/10/undefinedsurvivors-20241017-314784-header.jpg",
    publishedAt: "2024-10-17T05:19:10Z",
    content:
      "Runpath1017Undefined SurvivorsSteamPCSteam2024\r\nUndefined Survivors\r\nRunpathITUndefined Survivors3\r\nUndefined SurvivorsPCSteam2024",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "兴杰",
    title: 'Angular 19 "要" 来了⚡ - 兴杰',
    description:
      "前言 Angular 19 预计会在 11 月中旬发布，目前 (2024-10-27) 最新版本是 v19.0.0-next.11。 这次 v19 的改动可不小哦，新增了很多功能，甚至连 effect 都 breaking changes 了呢&#128580; 估计这回 Angular 团队又会一",
    url: "https://www.cnblogs.com/keatkeat/p/18511853",
    urlToImage: null,
    publishedAt: "2024-10-28T14:55:00Z",
    content:
      "Angular 19 11 (2024-10-27) v19.0.0-next.11\r\n v19 effect breaking changes \r\n Angular ...\r\n Angular \r\n -- Angular Google \r\n v19 \r\n (SSRUnit TestingImage Optimization) \r\nInput with undefined initialValu… [+18185 chars]",
  },
  {
    source: {
      id: null,
      name: "Psychology Today",
    },
    author: "Sophia Dembling",
    title: "Living Between What Is Gone and What Is Yet to Be",
    description:
      "Personal Perspective: The loss of a spouse ended the life I had. Where do I go from here?",
    url: "https://www.psychologytoday.com/intl/blog/widows-walk/202410/living-between-what-is-gone-and-what-is-yet-to-be",
    urlToImage:
      "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/teaser_image/blog_entry/2024-10/evan-dennis-i--IN3cvEjg-unsplash.jpg?itok=jStPV0Py",
    publishedAt: "2024-10-17T13:02:20Z",
    content:
      "When Tom died suddenly in 2020, I was 62 years old and vowed to anyone who would listen that the moment I was 65 and on Medicare, I was moving from Texas, as Tom and I had planned to do eventually. (… [+4952 chars]",
  },
  {
    source: {
      id: null,
      name: "Juxtapoz.com",
    },
    author: "Editor@juxtapoz.com (Editor -- Evan)",
    title: 'Luke Agada "Between Two Suns" @ Roberts Projects, Los Angeles',
    description:
      "Roberts Projects is pleased to present Between Two Suns, a solo exhibition of recent paintings by Chicago-based artist Luke Agada. As if mapping the blurred and sinewy terrain of his psyche, Agada paints in pursuit of visualizing the “third space”: an interna…",
    url: "https://www.juxtapoz.com/news/painting/luke-agada-between-two-suns-roberts-projects-los-angeles/",
    urlToImage:
      "https://www.juxtapoz.com/media/k2/items/cache/b88b6327eb762cdbf0d452b3a4d0d7c0_L.jpg?t=1729727276",
    publishedAt: "2024-10-24T07:00:30Z",
    content:
      "Roberts Projects is pleased to present Between Two Suns, a solo exhibition of recent paintings by Chicago-based artist Luke Agada. As if mapping the blurred and sinewy terrain of his psyche, Agada pa… [+2926 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Steven Wasserman, Contributor, \n Steven Wasserman, Contributor\n https://www.forbes.com/sites/stevenwasserman/",
    title:
      "Preparing Future Financial Leaders To Be Successful Post Graduation",
    description:
      "Employers firing Gen-Z employees because they lack key soft skills. Instructors can assist by having students practice these skills in their classes.",
    url: "https://www.forbes.com/sites/stevenwasserman/2024/10/24/preparing-future-financial-leaders-to-be-successful-post-graduation/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/671a607c598d3a63c0b16f4b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-10-24T15:04:19Z",
    content:
      "People in a business meeting. Male leader of a multiracial business team greets a new team member ... [+] shaking his hand. Concept of business relationships, hiring and promotion.\r\ngetty\r\nI recently… [+4145 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Pierrick Bouffaron, Forbes Councils Member, \n Pierrick Bouffaron, Forbes Councils Member\n https://www.forbes.com/councils/forbesbusinesscouncil/people/pierrickbouffaron/",
    title: "Rethinking Corporate Innovation Strategies From The Ground Up",
    description: "Why do corporations still struggle to innovate?",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/10/30/rethinking-corporate-innovation-strategies-from-the-ground-up/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/6721504c01decff8dacce4b0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-10-30T12:45:00Z",
    content:
      "Pierrick Bouffaron, Operating Partner for Main Sequence, a global investor in technology with offices in Hong Kong, Luxembourg and NYC. \r\ngetty\r\nFor more than 20 years, academics and major business o… [+5907 chars]",
  },
  {
    source: {
      id: null,
      name: "Catracalivre.com.br",
    },
    author: "Maíra Campos",
    title:
      "Esquenta Black Friday CVC: Pacotes de viagem a partir de 12x de R$ 69",
    description:
      "A operadora CVC antecipou a tradicional campanha de Black Friday e oferece pacotes de viagem por preços que começam em 12x R$ 69 por pessoa",
    url: "https://catracalivre.com.br/viagem-livre/esquenta-black-friday-cvc-pacotes-de-viagem-a-partir-de-12x-de-r-69/",
    urlToImage:
      "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1280,h=680,fit=cover,format=jpeg/wp-content/uploads/2022/01/cvc.jpg",
    publishedAt: "2024-11-01T22:01:07Z",
    content:
      "Já programando as próximas férias? A operadora CVC antecipou a tradicional campanha de Black Friday e oferece pacotes de viagem por preços que começam em 12x R$ 69 por pessoa, além de passagens aérea… [+3370 chars]",
  },
  {
    source: {
      id: null,
      name: "Raw Story",
    },
    author: "Daniel Hampton",
    title: "Judge smacks down slew of Trump-backed election board rule changes",
    description:
      "A judge has smacked down a slew of election rule changes passed by a Donald Trump-backed board in Georgia, according to a report.Fulton County Superior Court Judge Thomas Cox found the rules violated state laws, including one that would have required county e…",
    url: "https://www.rawstory.com/georgia-elections-2669411927/",
    urlToImage:
      "https://www.rawstory.com/media-library/file-photo-an-election-worker-prepares-absentee-ballots-for-the-upcoming-general-election-before-they-are-mailed-to-voters-at.jpg?id=53801673&width=1200&height=600&coordinates=0%2C661%2C0%2C661",
    publishedAt: "2024-10-16T23:47:57Z",
    content:
      "A judge has smacked down a slew of election rule changes passed by a Donald Trump-backed board in Georgia, according to a report.\r\nFulton County Superior Court Judge Thomas Cox found the rules violat… [+1267 chars]",
  },
  {
    source: {
      id: null,
      name: "Zhangxinxu.com",
    },
    author: "张 鑫旭",
    title: "Object.is/===、数组at/直接索引、substring/slice的区别",
    description:
      "介绍几个JS中非常雷同的方法或者语法，不知道诸位是否可知其中的差异？",
    url: "https://www.zhangxinxu.com/wordpress/2024/10/js-object-is-array-at-substring-slice/",
    urlToImage: null,
    publishedAt: "2024-10-24T14:57:18Z",
    content:
      "by zhangxinxu from https://www.zhangxinxu.com/wordpress/?p=11387\r\nObject.is===\r\nObject.is()===\r\n1. NaN\r\nNaNNaNfalse\r\nNaN === NaN\r\n// false\r\nObject.is()true\r\nObject.is(NaN, NaN)\r\n// true\r\n2. +0-0\r\n===… [+764 chars]",
  },
  {
    source: {
      id: null,
      name: "Theeverygirl.com",
    },
    author: "Emma Ginsberg",
    title:
      "The “Single Scale” Theory Could Explain Why You’re Not Finding the One",
    description:
      "Throughout my dating life, the idea of dating for “the one” has seemed…well…a little ridiculous. I’ve never known a dating\nThe post The “Single Scale” Theory Could Explain Why You’re Not Finding the One appeared first on The Everygirl.",
    url: "http://theeverygirl.com/single-scale-theory/",
    urlToImage:
      "https://media.theeverygirl.com/wp-content/uploads/2024/10/single-scale-theory-teg-social.jpg",
    publishedAt: "2024-10-23T13:24:03Z",
    content:
      "Throughout my dating life, the idea of dating for the one has seemedwella little ridiculous. Ive never known a dating world without dating apps, where countless options are algorithmically served to … [+6256 chars]",
  },
  {
    source: {
      id: null,
      name: "Zenn.dev",
    },
    author: null,
    title: "JavaScriptのProxyを使うときに気をつけること",
    description:
      "本稿では、Proxyを使う際はオブジェクトの原理をよく理解した上で、PreventExtensions時の挙動とPrivate Identifierに気をつけましょうという話をします。 そもそもProxyは何なのか Proxy は Reflect と対をなすプリミティブAPIで、オブジェクトの低レベルプロトコルの操作を提供します。 Proxyは、オブジェクトの低レベ...",
    url: "https://zenn.dev/qnighy/articles/5562746d52712f",
    urlToImage:
      "https://res.cloudinary.com/zenn/image/upload/s--5vquzDn2--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:JavaScript%25E3%2581%25AEProxy%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%2586%25E3%2581%25A8%25E3%2581%258D%25E3%2581%25AB%25E6%25B0%2597%25E3%2582%2592%25E3%2581%25A4%25E3%2581%2591%25E3%2582%258B%25E3%2581%2593%25E3%2581%25A8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Masaki%2520Hara%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2l3aEI4dTM5cFZyM09sWVFLcUU5Z1ozV2d3MHlsMS03cUZad0huYWc9czI1MC1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
    publishedAt: "2024-10-14T08:15:15Z",
    content:
      'ProxyPreventExtensionsPrivate Identifier\r\n Proxy\r\nProxyReflect API\r\nProxy\r\n{ foo: "bar" }[1, 2, 3], () =&gt; 42\r\nJavaScript\r\nObject\r\n<ul><li>Object.create(null)Object</li><li>import * as ...await imp… [+7157 chars]',
  },
  {
    source: {
      id: null,
      name: "Zenn.dev",
    },
    author: null,
    title: "弊社の「意識ﾁｮｯﾄ低いアーキテクチャ」10選",
    description:
      "「CTOの視点で選ぶ「最適な」アーキテクチャとは？」というイベントで登壇しました。 本記事は登壇資料をMarkdownとしてそのまま記事化したものです。スライドのほうが読みやすい方は、Speaker Deckで御覧ください！ 自己紹介1｜職歴、趣味など 職種・SNS 株式会社NoSchool CTO 2016年〜Webエンジニア。2019年〜現職 Twi...",
    url: "https://zenn.dev/manalink_dev/articles/not-perfectionist-architecture",
    urlToImage:
      "https://res.cloudinary.com/zenn/image/upload/s--bfryVtPb--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%25BC%258A%25E7%25A4%25BE%25E3%2581%25AE%25E3%2580%258C%25E6%2584%258F%25E8%25AD%2598%25EF%25BE%2581%25EF%25BD%25AE%25EF%25BD%25AF%25EF%25BE%2584%25E4%25BD%258E%25E3%2581%2584%25E3%2582%25A2%25E3%2583%25BC%25E3%2582%25AD%25E3%2583%2586%25E3%2582%25AF%25E3%2583%2581%25E3%2583%25A3%25E3%2580%258D10%25E9%2581%25B8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:meijin%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2FmZjliMGZlZjIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:%25E3%2583%259E%25E3%2583%258A%25E3%2583%25AA%25E3%2583%25B3%25E3%2582%25AF%2520Tech%2520Blog%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pPWmtyWk1nS3djRXl5a2w1X2lVTFZFVmtVVUpkNzkzcjlfejhERjRzPXMyNTAtYw==%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png",
    publishedAt: "2024-10-29T18:21:49Z",
    content:
      "CTO\r\nhttps://rosca.connpass.com/event/333739/\r\nMarkdownSpeaker Deck\r\n1\r\n2\r\n<ul><li>ZennReact\r\n</li><li></li><li></li></ul>\r\nhttps://www.test-maker.app/\r\nhttps://zenn.dev/meijin/books/laravel-graduate… [+3422 chars]",
  },
  {
    source: {
      id: null,
      name: "Fashionsnap.com",
    },
    author: null,
    title:
      "Encounter Hiroka Kitajima & Mone Koshikawa　お菓子やレースで彩る祝祭の日",
    description:
      "「Encounter=出逢い。」 世界中に存在する、アーティストたちとの巡り合い。多彩なクリエイターたちの才能を披露する場として、彼らが表現する、瑞々しく、独創的な作品の中から琴線に触れる作品を編集部がピックアップ。選び抜かれた、個性豊かな感性に想像を巡らせて。 A uniquely precious encounter with artists from all over the worl... このコンテンツは FASHIONSNAP が配信しています。",
    url: "https://www.fashionsnap.com/article/2024-11-04/hiroka-kitajima-mone-koshikawa/",
    urlToImage:
      "https://fashionsnap-assets.com/asset/format=auto,width=1280,height=670,gravity=center/article/images/2024/10/hiroka-mone-2024010311-39b27d43-9e8b-4004-8600-9a8a574c7ddb.jpg",
    publishedAt: "2024-11-04T09:59:00Z",
    content:
      "Encounter=\r\nA uniquely precious encounter with artists from all over the world.As a platform to exhibit and unveil the various talent, Lula Japans editorial team have selected the most vivid and genu… [+2237 chars]",
  },
  {
    source: {
      id: null,
      name: "The Star Online",
    },
    author: "The Star Online",
    title:
      "PAC recommends PM's Dept review relevance of National Professors Council",
    description:
      "KUALA LUMPUR: The Public Accounts Committee (PAC) has recommended that the Prime Minister's Department assesses the relevance of the National Professors Council (MPN) as a key driver of academic expertise in supporting the government's national development ef…",
    url: "https://www.thestar.com.my/news/nation/2024/11/07/pac-recommends-pm039s-dept-review-relevance-of-national-professors-council",
    urlToImage:
      "https://apicms.thestar.com.my/uploads/images/2024/11/07/3005442.jpg",
    publishedAt: "2024-11-07T09:36:00Z",
    content:
      "KUALA LUMPUR: The Public Accounts Committee (PAC) has recommended that the Prime Minister's Department assesses the relevance of the National Professors Council (MPN) as a key driver of academic expe… [+1886 chars]",
  },
  {
    source: {
      id: null,
      name: "Github.io",
    },
    author: null,
    title: "Sets, types and type checking",
    description: "My currently understanding of types",
    url: "https://kaleidawave.github.io/posts/sets-types-and-type-checking/",
    urlToImage:
      "https://kaleidawave.github.io/media/banners/sets-types-and-type-checking.png",
    publishedAt: "2024-10-30T18:53:50Z",
    content:
      "Published on Wednesday 30th October 2024\r\nIn the process of building a type-checker I have learnt a lot of the details about the theory of types and sets. With all this information I thought I would … [+73764 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Dominic Bayley",
    title: "HyperX Cloud Mix 2 review: A premium headset for busy gamers",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Compact and lightweight</li>\n\n\n\n<li>Looks like a headphone and can be used just as well as one</li>\n\n\n\n<li>Plush and comfortable earcups</li>\n\n\n\n<li>The cups swivel and the headband is adjustable</li>\n\n\n\n<li>The v…",
    url: "https://www.pcworld.com/article/2493522/hyperx-cloud-mix-2-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/20240916_154845.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-25T15:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>C… [+8450 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Michael Crider",
    title: "Mokibo Fusion review: A bad keyboard and a bad touchpad in one",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Tiny</li>\n\n\n\n<li>Super-thin</li>\n\n\n\n<li>Functional, techincally</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Hard to use as a keyboard</li>\n\n\n\n<li>Hard to use as a touchpad</li>\n\n\n\n<li>Integrated stand isn’t great</li>\n</ul>\n…",
    url: "https://www.pcworld.com/article/2500996/mokibo-fusion-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/fusion-header.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-06T16:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>T… [+10104 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Michael Crider",
    title:
      "Hexgears Immersion A3 keyboard review: Budget price, flagship features",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Tons of features for the price</li>\n\n\n\n<li>Long battery life </li>\n\n\n\n<li>Hot-swap switches</li>\n\n\n\n<li>Light weight</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Screen is almost useless</li>\n\n\n\n<li>No per-game profiles</li>\n…",
    url: "https://www.pcworld.com/article/2500988/hexgears-immersion-a3-keyboard-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/hexgears-header.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-29T13:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>T… [+8340 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Mark Hachman",
    title: "Coolpo AI Huddle Mini Lite review: A unique AI-powered 4K webcam",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Image quality is quite good</li>\n\n\n\n<li>AI features feel well thought-out</li>\n\n\n\n<li>Very good noise cancellation</li>\n\n\n\n<li>Innovative solution for group settings</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>4K turns to 10…",
    url: "https://www.pcworld.com/article/2503446/coolpo-ai-huddle-mini-lite-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/Coolpo-Ai-Huddle-Mini-Lite-product.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-05T15:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>I… [+7944 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Jon L. Jacobi",
    title:
      "Vantrue Nexus 2X dash cam review: Two-channel GPS goodness with optional LTE",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>GPS and magnetic mount</li>\n\n\n\n<li>Very good front captures up to 1944p (4:3)</li>\n\n\n\n<li>Interior captures with infrared</li>\n\n\n\n<li>Supports roll-your-own LTE for remote monitoring with optional module</li>\n</ul…",
    url: "https://www.pcworld.com/article/2477736/vantrue-nexus-2x-dash-cam-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/Viofo-Nexus-X2-hero.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-30T13:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>G… [+7350 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Michael Crider",
    title: "Lemokey X0 keypad review: A great add-on for any PC gamer",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Great form factor</li>\n\n\n\n<li>Cheap</li>\n\n\n\n<li>Mechanical switches</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>No adjustable feet</li>\n\n\n\n<li>No per-game profiles</li>\n</ul>\n\r\n\n\n\n\nOur Verdict \r\n\nThe Lemokey X0 is a great en…",
    url: "https://www.pcworld.com/article/2501003/lemokey-x0-keypad-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/x0-header.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-01T10:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>G… [+8649 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Benjamin Kratsch",
    title:
      "Call of Duty: Black Ops 6’s campaign is a feast for James Bond fans",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Long 10-hour campaign</li>\n\n\n\n<li>Very well written</li>\n\n\n\n<li>Excellent actors who bring CoD to James Bond level</li>\n\n\n\n<li>Finally staged on a much larger scale again</li>\n\n\n\n<li>Beautiful locations: casinos, …",
    url: "https://www.pcworld.com/article/2515282/call-of-duty-black-ops-6-campaign-is-a-feast-for-james-bond-fans.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/BlackOps6_01_Aufmacher.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-08T17:30:13Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>L… [+9790 chars]",
  },
  {
    source: {
      id: null,
      name: "Raw Story",
    },
    author: "Sarah K. Burris",
    title:
      "University of Florida's $18M basketball coach accused of stalking students: report",
    description:
      'The University of Florida men\'s basketball coach, Todd Golden, has been accused of stalking and sexually harassing students, the school newspaper, The Alligator, reported Friday. Documents obtained by the newspaper show "an undefined number of women" who file…',
    url: "https://www.rawstory.com/university-of-florida-coach/",
    urlToImage:
      "https://www.rawstory.com/media-library/nov-4-2024-jacksonville-florida-usa-florida-gators-head-coach-todd-golden-looks-on-against-the-south-florida-bulls-during-t.jpg?id=54437457&width=1200&height=600&coordinates=0%2C456%2C0%2C456",
    publishedAt: "2024-11-08T19:51:19Z",
    content:
      "The University of Florida men's basketball coach, Todd Golden, has been accused of stalking and sexually harassing students, the school newspaper, The Alligator, reported Friday. \r\nDocuments obtained… [+1727 chars]",
  },
  {
    source: {
      id: null,
      name: "Dou.ua",
    },
    author: "Dmytro Skorokhod",
    title:
      "Тестові для Python-інженерів: приклади, критерії оцінки та причини відмов кандидатам",
    description:
      "Як дізнатися, що кандидат на вакансію дійсно вміє виконувати свою роботу? Не завжди знання напам’ять відповідей на теоретичні запитання свідчить про здатність впоратись із реальними завданнями. Ми звернулися до IT-компаній на українському ринку, які наймають …",
    url: "https://dou.ua/lenta/articles/python-test-tasks-examples/",
    urlToImage: "https://s.dou.ua/img/announces/python_840x460_1.png",
    publishedAt: "2024-10-15T07:01:16Z",
    content:
      ",     ?       .    IT-, Python-,   , ,   -,   .\r\n«     »\r\n , Principal Python Engineer  Intellias\r\n   .   . ,   .   : -   .  ,   ,     ,   .  ,   , , , ,   : , .   Intellias  .\r\n ,    ,    .   , , . … [+3942 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "Yscliking",
    title: "2024强网杯pwn short wp - Yscliking",
    description:
      "这时2024强网杯的pwn部分的short的WP 分析以下程序的基本安全措施 *] '/home/ysly/solve/tmp/short' Arch: i386-32-little RELRO: Partial RELRO Stack: No canary found NX: NX enabled",
    url: "https://www.cnblogs.com/Ysliking/p/18514572",
    urlToImage: null,
    publishedAt: "2024-10-29T14:09:00Z",
    content:
      "2024pwnshortWP\r\n*] '/home/ysly/solve/tmp/short'\r\n Arch: i386-32-little\r\n RELRO: Partial RELRO\r\n Stack: No canary found\r\n NX: NX enabled\r\n PIE: No PIE (0x8048000)\r\n Stripped: No\r\nNXghidraread,gets\r\n/*… [+3341 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "木子七",
    title: "Js面向对象 - 木子七",
    description:
      "程序就是对现实世界的抽象,一个事物抽象到程序中后就变成了对象,在程序的世界中，一切皆对象 面向对象的编程指，程序中的所有操作都是通过对象来完成 做任何事情之前都需要先找到它的对象，然后通过对象来完成各种操作 一个事物通常由两部分组成：数据和功能 一个对象由两部分组成：属性和方法 事物的数据到了对象中",
    url: "https://www.cnblogs.com/Mickey-7/p/18467887",
    urlToImage: null,
    publishedAt: "2024-10-15T08:56:00Z",
    content:
      ',,\r\nconst user = {\r\n // \r\n name:"seven",\r\n age:18,\r\n weight:100,\r\n// \r\n get_info(){\r\n console.log(`:${this.name},${this.age},:${this.weight}`)\r\n },\r\nset_age(age){\r\n this.age = age\r\n }\r\n}\r\ncalss\r\n<ul>… [+5688 chars]',
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "zhongcx",
    title: "鸿蒙开发案例：七巧板 - zhongcx",
    description:
      "【1】引言（完整代码在最后面） 本文介绍的拖动七巧板游戏是一个简单的益智游戏，用户可以通过拖动和旋转不同形状的七巧板块来完成拼图任务。整个游戏使用鸿蒙Next框架开发，利用其强大的UI构建能力和数据响应机制，实现了流畅的用户体验。 【2】环境准备 电脑系统：windows 10 开发工具：DevEc",
    url: "https://www.cnblogs.com/zhongcx/p/18534029",
    urlToImage: null,
    publishedAt: "2024-11-07T13:27:00Z",
    content:
      "1\r\nNextUI\r\n2\r\nwindows 10\r\nDevEco Studio NEXT Beta1 Build Version: 5.0.3.806\r\nAPI 12\r\nMate 60 Pro\r\nArkTSArkUI\r\n3\r\n1. TangramBlock TangramBlockUI\r\n2. Next@ObservedV2@TraceTangramBlockUIUI\r\n3. UI NextUI… [+6530 chars]",
  },
  {
    source: {
      id: null,
      name: "Javacodegeeks.com",
    },
    author: "Eleftheria Drosopoulou",
    title: "Safe Rust & C/C++ Interoperability: Essential Best Practices",
    description:
      "Rust & C/C++ are both powerful systems programming languages, but they excel in different areas. Rust is known for its memory safety features, while C and C++ provide fine-grained control over hardware and are widely used in legacy systems. Integrating Rust w…",
    url: "https://www.javacodegeeks.com/2024/10/safe-rust-c-c-interoperability-essential-best-practices.html",
    urlToImage:
      "https://www.javacodegeeks.com/wp-content/uploads/2019/03/web-development-logo.jpg",
    publishedAt: "2024-10-30T17:32:00Z",
    content:
      "Rust &amp; C/C++ are both powerful systems programming languages, but they excel in different areas. Rust is known for its memory safety features, while C and C++ provide fine-grained control over ha… [+4934 chars]",
  },
  {
    source: {
      id: null,
      name: "Javacodegeeks.com",
    },
    author: "Eleftheria Drosopoulou",
    title: "Tackling Advanced TypeScript Issues in 2024",
    description:
      "TypeScript continues to dominate the development landscape, offering strong typing, robust tooling, and improved maintainability. However, with power comes complexity, and developers often face advanced issues. This article dives into the nuanced problems you…",
    url: "https://www.javacodegeeks.com/2024/11/tackling-advanced-typescript-issues-in-2024.html",
    urlToImage:
      "https://www.javacodegeeks.com/wp-content/uploads/2023/06/typescript-logo.jpg",
    publishedAt: "2024-11-06T17:28:00Z",
    content:
      "TypeScript continues to dominate the development landscape, offering strong typing, robust tooling, and improved maintainability. However, with power comes complexity, and developers often face advan… [+5160 chars]",
  },
  {
    source: {
      id: null,
      name: "Symfony.com",
    },
    author: "Fabien Potencier",
    title: "Symfony 7.2.0-RC1 released",
    description:
      "Symfony 7.2.0-RC1 has just been released.\nHere is the list of the most important changes since 7.2.0-BETA2:\n\n feature #58852 [TypeInfo] Remove @experimental tag (@mtarld)\nfeature #57630 [TypeInfo] Redesign Type methods and nullability (@mtarld)\nsecurity…",
    url: "https://symfony.com/blog/symfony-7-2-0-rc1-released?utm_source=Symfony%20Blog%20Feed&utm_medium=feed",
    urlToImage: "https://symfony.com/images/opengraph/symfony.png",
    publishedAt: "2024-11-13T15:19:16Z",
    content:
      "Symfony 7.2.0-RC1 has just been released.\r\nHere is the list of the most important changes since 7.2.0-BETA2:\r\n<ul><li>feature #58852 [TypeInfo] Remove @experimental tag (@mtarld)</li><li>feature #576… [+1888 chars]",
  },
  {
    source: {
      id: null,
      name: "Enechain.com",
    },
    author: null,
    title:
      "【QA業務効率化】GAS + Notion APIを用いたテスト進捗報告の自動生成 - enechain Tech Blog",
    description:
      "はじめに enechainでのテスト管理 テストケースとテスト進捗の管理 バグチケットの管理 日々のテスト進捗報告の自動生成 テスト進捗情報の取得 バグチケット情報の取得 報告の整形とSlackへのポスト 進捗報告生成のトリガー 今後の展望 まとめ はじめに こんにちは！enechainでQAチームのマネージャーを務める杉田 (@sug...",
    url: "https://techblog.enechain.com/entry/automated-daily-test-progress-reporting",
    urlToImage:
      "https://cdn.image.st-hatena.com/image/scale/365c6bb188ed8b9d1721fc3c8eb4d1785fdf9f17/backend=imagemagick;height=1300;version=1;width=1300/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fe%2Fenechain%2F20241106%2F20241106103051.png",
    publishedAt: "2024-11-06T02:30:22Z",
    content:
      "enechainQA (@sug1san) \r\nQAQAQA\r\nGAS (Google Apps Script) Notion API\r\nenechain\r\nenechain\r\nenechainQAQA1QAQAtaise-\r\ntechblog.enechain.com\r\nGoogleTestRailGoogle\r\nGoogle\r\nNotionenechain2022JIRA / Conflue… [+3136 chars]",
  },
  {
    source: {
      id: null,
      name: "Whyevolutionistrue.com",
    },
    author: "whyevolutionistrue",
    title: "Bill Maher on the unlikelihood of an ”October Surprise”",
    description:
      "Here’s Bill Maher’s monologue from his most recent Real Time show, arguing that voters should not expect an “October surprise”.  He argues that because Trump has been so persistently awful in familiar ways, that there will be no change in his character before…",
    url: "https://whyevolutionistrue.com/2024/10/20/bill-maher-on-an-october-surprise/",
    urlToImage:
      "https://whyevolutionistrue.com/wp-content/uploads/2023/10/weit-cover-kindle-158s.png",
    publishedAt: "2024-10-20T16:30:12Z",
    content:
      "Here’s Bill Maher’s monologue from his most recent Real Time show, arguing that voters should not expect an “October surprise”.  He argues that because Trump has been so persistently awful in familia… [+1692 chars]",
  },
  {
    source: {
      id: null,
      name: "Symfony.com",
    },
    author: "Fabien Potencier",
    title: "Symfony 7.1.8 released",
    description:
      "Symfony 7.1.8 has just been released.\nHere is the list of the most important changes since 7.1.7:\n\n security #cve-2024-50342 [HttpClient] Resolve hostnames in NoPrivateNetworkHttpClient (@nicolas-grekas)\nsecurity #cve-2024-51996 [Security] Check owner…",
    url: "https://symfony.com/blog/symfony-7-1-8-released?utm_source=Symfony%20Blog%20Feed&utm_medium=feed",
    urlToImage: "https://symfony.com/images/opengraph/symfony.png",
    publishedAt: "2024-11-13T14:52:10Z",
    content:
      "Symfony 7.1.8 has just been released.\r\nHere is the list of the most important changes since 7.1.7:\r\n<ul><li>security #cve-2024-50342 [HttpClient] Resolve hostnames in NoPrivateNetworkHttpClient (@nic… [+1608 chars]",
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-11-07T05:14:23Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Ashley Case, Contributor, \n Ashley Case, Contributor\n https://www.forbes.com/sites/ashleycase/",
    title:
      "Red Flags Aren’t Just For Exes: Trouble In Estate Planning Paradise",
    description:
      "Is it your ex-boyfriend or bad estate planning advice? Red flags in relationships can also be red flags in estate planning. Be wary of advisors who use these phrases.",
    url: "https://www.forbes.com/sites/ashleycase/2024/10/16/red-flags-arent-just-for-exes-trouble-in-estate-planning-paradise/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/670f0aee4565f1a0f9c3c306/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-10-16T04:30:24Z",
    content:
      "Red flags can signal a warning to be careful of pending romantic or estate planning disaster.\r\ngetty\r\nSome seemingly innocent comments can quickly sour a budding relationship, signaling underlying is… [+8754 chars]",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Zac Ntim",
    title:
      "Athina Rachel Tsangari On Her Emotional Return To Greece With ‘Harvest’ & Plans For Her Next Feature, A “Screwball Heist Set In The Near Future”",
    description:
      "Unlike most late fall festivals Thessaloniki in Northern Greece regularly draws packed crowds of passionate and youthful patrons, largely thanks to the city’s significant student population. On Saturday at the festival’s Olympia Theatre, however, a distinct w…",
    url: "http://deadline.com/2024/11/athina-rachel-tsangari-greece-harvest-screwball-heist-thessaloniki-film-festival-2024-1236166099/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2024/11/GettyImages-2181277911.jpg?w=1024",
    publishedAt: "2024-11-04T11:51:07Z",
    content:
      "Unlike most late fall festivals Thessaloniki in Northern Greece regularly draws packed crowds of passionate and youthful patrons, largely thanks to the city’s significant student population. On Satur… [+9493 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "凪风sama",
    title: "从编译链接到cmake - 凪风sama",
    description:
      ".c(.cpp)文件到可执行文件 对于一份简单的.c/.cpp为后缀的源文件，他所使用的语言是人类可以阅读并看懂的，但是对于计算机来说，其可理解并执行的是二进制的机器码。 也就是说，计算机所能运行的是二进制的机器码，而早期为了方便人类阅读，使用一些简单的助记符来代替机器码，比如MOV,LOOP...",
    url: "https://www.cnblogs.com/CrescentWind/p/18528965",
    urlToImage: null,
    publishedAt: "2024-11-05T14:05:00Z",
    content:
      '.c(.cpp)\r\n.c/.cpp\r\nMOV,LOOP...cc++python\r\n#include &lt;stdio.h&gt;\r\nint main()\r\n{\r\n printf("Hello, world!\\n");\r\n return 0;\r\n} // 01010101....\r\nccpp\r\ngcc()clang(jetbrain)msvc()\r\ngccgcc --versiongccgcc… [+2217 chars]',
  },
  {
    source: {
      id: null,
      name: "Packetstormsecurity.com",
    },
    author: null,
    title: "ABB Cylon Aspect 3.08.00 Off-By-One",
    description:
      "A vulnerability was identified in a ABB Cylon Aspect version 3.08.00 where an off-by-one error in array access could lead to undefined behavior and potential denial of service. The issue arises in a loop that iterates over an array using a less than or equals…",
    url: "https://packetstormsecurity.com/files/182513/ZSL-2024-5861.txt",
    urlToImage: null,
    publishedAt: "2024-11-05T15:25:39Z",
    content:
      "ABB Cylon Aspect 3.08.00 (log(Mix/Yum)Lookup.php) Off-by-One Error in Log ParsingVendor: ABB Ltd.Product web page: https://www.global.abbAffected version: NEXUS Series, MATRIX-2 Series, ASPECT-Enterp… [+3173 chars]",
  },
  {
    source: {
      id: null,
      name: "Thegospelcoalition.org",
    },
    author: "Ian Harber",
    title: "Don’t Overlook the Church in Your Search for Jesus",
    description:
      "‘Invisible Jesus’ is more likely to entrench the divide between the church and those who’ve been hurt by it than it is to heal relationships, strengthen the faith of deconstructors, and solve the problems they encounter in the church.",
    url: "https://www.thegospelcoalition.org/reviews/invisible-jesus-book/",
    urlToImage:
      "https://media.thegospelcoalition.org/wp-content/uploads/2024/10/23192137/invisible-jesus-book-1.jpg",
    publishedAt: "2024-10-30T04:02:00Z",
    content:
      "Recent studies reveal about 10 million people have been labeled dechurched casualties. These are folks whove left the church over the past 25 years because of their negative experiences, and they hav… [+8021 chars]",
  },
  {
    source: {
      id: null,
      name: "Wowebook.org",
    },
    author: "WOW! eBook",
    title: "C++ Brain Teasers",
    description:
      "eBook Details: Paperback: 140 pages Publisher: WOW! eBook (July 9, 2024) Language: English ISBN-10: 8888650516 ISBN-13: 978-8888650516 eBook Description: C++ Brain Teasers: Exercise Your Mind C++ is famous for getting all the default behaviors wrong and for s…",
    url: "https://www.wowebook.org/cplusplus-brain-teasers/",
    urlToImage: null,
    publishedAt: "2024-10-14T17:35:15Z",
    content:
      "eBook Details:\r\n<ul><li>Paperback: 140 pages</li><li>Publisher: WOW! eBook (July 9, 2024)</li><li>Language: English</li><li>ISBN-10: 8888650516</li><li>ISBN-13: 978-8888650516</li></ul>eBook Descript… [+1895 chars]",
  },
  {
    source: {
      id: null,
      name: "Zenn.dev",
    },
    author: null,
    title:
      "（改訂版）三項演算子は本当に読みにくいのか。TypeScript で分かった 後置 else if メソッド の効果",
    description:
      "本記事はこちらの改訂版です。コードも改良しています。 三項演算子は本当に読みにくいのか コードをドキュメントのように読みやすくすることは非常に多くのメリットがあります。 そして、プログラミング言語自体にも読みやすくするためだけに存在する構文があります。 その１つが三項演算子です。 いやいや、三項演算子...",
    url: "https://zenn.dev/takakiriy/articles/edba260bda5aa3",
    urlToImage:
      "https://res.cloudinary.com/zenn/image/upload/s--J_oX2vpb--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25EF%25BC%2588%25E6%2594%25B9%25E8%25A8%2582%25E7%2589%2588%25EF%25BC%2589%25E4%25B8%2589%25E9%25A0%2585%25E6%25BC%2594%25E7%25AE%2597%25E5%25AD%2590%25E3%2581%25AF%25E6%259C%25AC%25E5%25BD%2593%25E3%2581%25AB%25E8%25AA%25AD%25E3%2581%25BF%25E3%2581%25AB%25E3%2581%258F%25E3%2581%2584%25E3%2581%25AE%25E3%2581%258B%25E3%2580%2582TypeScript%2520%25E3%2581%25A7%25E5%2588%2586%25E3%2581%258B%25E3%2581%25A3%25E3%2581%259F%2520%25E5%25BE%258C%25E7%25BD%25AE%2520else%2520if%2520%25E3%2583%25A1%25E3%2582%25BD%25E3%2583%2583%25E3%2583%2589%2520%25E3%2581%25AE%25E5%258A%25B9%25E6%259E%259C%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Takakiri%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2gwNE5Wa291bkxmWnVxTW81QkRDNlBzX09zUmlpajkwUjhKS0RHPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
    publishedAt: "2024-11-11T04:25:09Z",
    content:
      'const value = x ===1?"A":"B";\r\nTypeScript \r\n TypeScript Python \r\nconst message =_(`: ${name}`).elseIf(!name).then("");\r\nif(!name){var message ="";}else{var message =`: ${name}`;}\r\n: else if \r\nPython … [+4507 chars]',
  },
  {
    source: {
      id: null,
      name: "Human Rights Watch",
    },
    author: "Human Rights Watch",
    title: "New Mali Law Disastrous for LGBT People",
    description:
      "Mali’s Transitional National Council passed a law on October 31 that makes homosexuality a criminal offense. The new legislation will intensify risks of stigma, discrimination, and violence against lesbian, gay, bisexual, and transgender (LGBT) people through…",
    url: "https://www.hrw.org/news/2024/11/06/new-mali-law-disastrous-lgbt-people",
    urlToImage:
      "https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2024/11/202411afr_mali_monument%20of%20peace.jpeg?h=34660f4b&itok=uGYSt79i",
    publishedAt: "2024-11-06T18:04:14Z",
    content:
      "Malis Transitional National Council passed a law on October 31 that makes homosexuality a criminal offense. The new legislation will intensify risks of stigma, discrimination, and violence against le… [+1925 chars]",
  },
  {
    source: {
      id: null,
      name: "Elconfidencialdigital.com",
    },
    author: "P.L.",
    title: "24 HORAS CON SEBASTIÁN: UN DÍA DE SOLIDARIDAD Y ESPERANZA",
    description:
      "Confidencial Digital. Contenidos confidenciales en español orientado a personas informadas que hoy en día desean estar aún más informadas",
    url: "https://www.elconfidencialdigital.com/articulo/tendencias/24-horas-sebastian-dia-solidaridad-esperanza/20241016094228859531.html",
    urlToImage:
      "https://www.elconfidencialdigital.com/media/elconfidencialdigital/images/2024/10/16/2024101609422796433.jpg",
    publishedAt: "2024-10-16T09:42:28Z",
    content:
      "Sabemos que la investigación y el apoyo a las personas afectadas por enfermedades graves, como el cáncer infantil, son esenciales para avanzar hacia un futuro más esperanzador. En esta ocasión, quere… [+1811 chars]",
  },
  {
    source: {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
    },
    author: "Shola Lawal",
    title: "Why is Ukraine’s army facing a desertion crisis?",
    description:
      "Thousands of men have abandoned their posts, blaming poor conditions on the front lines.",
    url: "https://www.aljazeera.com/news/2024/10/21/why-is-ukraines-army-facing-a-desertion-crisis",
    urlToImage:
      "https://www.aljazeera.com/wp-content/uploads/2024/04/AP24115536790930-1714005647.jpg?resize=1920%2C1440",
    publishedAt: "2024-10-21T08:37:10Z",
    content:
      "More Ukrainian soldiers have deserted the army this year than ever since the onset of a war that analysts say has seen both sides make gains and report losses.\r\nProsecutions for desertion from Ukrain… [+12751 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Matthew S. Smith",
    title: "Acer Swift 14 AI review: A humble laptop with lengthy battery life",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Enjoyable keyboard</li>\n\n\n\n<li>Lots of wired, wireless connectivity</li>\n\n\n\n<li>Well-rounded CPU and integrated GPU performance</li>\n\n\n\n<li>Lengthy battery life</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Boring design </li>…",
    url: "https://www.pcworld.com/article/2514033/acer-swift-14-ai-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/acer-swift-14-ai-3.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-12T14:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>E… [+13038 chars]",
  },
  {
    source: {
      id: null,
      name: "Cnblogs.com",
    },
    author: "粥里有勺糖",
    title: "迷惑代码赏析第1期 - 粥里有勺糖",
    description:
      "开发工作中遇到了许多的 ⛰ 代码，这个系列里就大家分享&吐槽一下。 同时也分享一下最近深度使用的专业编程显示器‍ 攒够素材就更新下一期，有好的素材也欢迎投稿，推荐！ 1 random了寂寞 目的是将目标值和一个[0,100)的随机数比较，但结果一直是 FAILED。 让",
    url: "https://www.cnblogs.com/roseAT/p/18511918",
    urlToImage: null,
    publishedAt: "2024-10-29T01:34:00Z",
    content:
      "&amp;\r\n1 random\r\n[0,100)FAILED\r\nfunction can(compareTo) {\r\n return Number.parseInt(Math.random * 100) &gt; compareTo\r\n ? Status.SUCCESS\r\n : Status.FAILED\r\n}\r\nMath.randomNaN\r\nfunction can(compareTo) {… [+5736 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Matthew S. Smith",
    title: "Gigabyte G34WQCP review: An excellent budget ultrawide monitor",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Plenty of video inputs </li>\n\n\n\n<li>Good SDR brightness </li>\n\n\n\n<li>Excellent contrast ratio </li>\n\n\n\n<li>Solid color gamut and accuracy </li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Stand requires use of screws </li>\n\n\n\n<li…",
    url: "https://www.pcworld.com/article/2496292/gigabyte-g34wqcp-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/11/gigabyte-g34wqcp-2-1.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-11-13T11:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>P… [+12783 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Matthew S. Smith",
    title: "MSI Stealth A16 AI+ review: A jack-of-all-trades",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Chassis feels durable</li>\n\n\n\n<li>Great wired and wireless connectivity</li>\n\n\n\n<li>Well-rounded CPU and GPU performance</li>\n\n\n\n<li>Lengthy battery life </li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Awkward keyboard and touc…",
    url: "https://www.pcworld.com/article/2500090/msi-stealth-a16-ai-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/msi-stealth-a16-a1-1.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-29T12:00:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>C… [+13229 chars]",
  },
  {
    source: {
      id: null,
      name: "PCWorld",
    },
    author: "Author: Michael Crider",
    title: "Razer BlackWidow V4 Pro 75% review: Keyboards don’t need screens",
    description:
      "At a glanceExpert's Rating\r\n\n\nPros\r\n\n<ul>\n<li>Excellent typing</li>\n\n\n\n<li>Incredible battery saver mode</li>\n\n\n\n<li>PBT keycaps (finally!)</li>\n</ul>\n\r\n\n\n\n\nCons\r\n\n<ul>\n<li>Screen is unnecessary </li>\n\n\n\n<li>Single-day battery with lights on</li>\n\n\n\n<li>Huge …",
    url: "https://www.pcworld.com/article/2501009/razer-blackwidow-v4-pro-75-review.html",
    urlToImage:
      "https://www.pcworld.com/wp-content/uploads/2024/10/razer-header.jpg?quality=50&strip=all&w=1024",
    publishedAt: "2024-10-31T14:30:00Z",
    content:
      "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAt a glance<ul><li>E… [+13596 chars]",
  },
];
