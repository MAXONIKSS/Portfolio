(() => {
  const STORAGE_KEY = "maxonik-projects-v2";
  const FIRESTORE_COLLECTION = "portfolio";
  const FIRESTORE_DOC_ID = "projects";
  const ADMIN_SESSION_FLAG = "maxonik-admin-authorized";
  const IMAGE_MAX_BYTES = 700 * 1024;
  const IMAGE_IDEAL_WIDTH = 1280;
  const IMAGE_IDEAL_HEIGHT = 720;
  const IMAGE_MIN_WIDTH = 960;
  const IMAGE_MIN_HEIGHT = 540;
  const APP_PACKAGE_MAX_BYTES = 300 * 1024 * 1024;
  const SCREENSHOTS_MAX_COUNT = 8;
  const SCREENSHOT_MAX_BYTES = 5 * 1024 * 1024;
  const EXPORT_VERSION = 1;
  const CONTACT_EMAIL = "kajosiamaja@gmail.com";
  const LANGUAGE_STORAGE_KEY = "maxonik-site-language";
  const GITHUB_SYNC_SETTINGS_KEY = "maxonik-github-sync-settings-v1";
  const AUTO_TRANSLATE_CACHE_KEY = "maxonik-auto-translate-cache-v1";
  const AUTO_TRANSLATE_CACHE_LIMIT = 180;

  const I18N = {
    uk: {
      navHome: "Головна",
      navAbout: "Про мене",
      navProjects: "Проекти",
      navContacts: "Контакти",
      navPolicies: "Політики",
      homeTitle: "Головна",
      aboutKicker: "Про мене",
      aboutTitle: "Втілюю ідеї в якісний код",
      aboutLead:
        "Я MAXONIK. Мій підхід до розробки полягає в створенні продуктів, за допомоги ШІ, які вражають своєю якістю та ефективністю. Працюю від ідеї і проектування до релізу та подальшої підтримки.",
      whatIDoTitle: "Що я роблю",
      whatIDoText:
        "Розробляю мобільні та web-рішення, будую архітектуру проектів, оптимізую продуктивність і доводжу продукт до стабільного production-рівня.",
      keySkillsTitle: "Ключові навички",
      workApproachTitle: "Підхід до роботи",
      workApproachText:
        "Роблю акцент на зрозумілий код, масштабовану структуру, стабільність і регулярні оновлення. Для мене важливо, щоб продукт був одночасно красивим, швидким і надійним.",
      aiApproachTitle: "Мій AI-підхід у розробці",
      aiApproachP1:
        "Позиціоную себе як AI-автоматизатор і розробник, який використовує можливості штучного інтелекту для швидкого створення стильних сайтів і сучасних додатків під конкретні задачі.",
      aiApproachP2:
        "Я розумію код на базовому рівні, постійно навчаюсь і з кожним проектом поглиблюю технічну експертизу. Цей сайт - яскравий приклад мого поточного скіла: від ідеї та структури до дизайну, контенту і реалізації.",
      technicalPracticeTitle: "Технічна практика в моїх проектах",
      projectsKicker: "Проекти",
      projectsTitle: "Моє портфоліо",
      projectsEmpty: "Поки що проекти не додані. Відкрий конструктор і створи перший проект.",
      contactKicker: "Контакти",
      contactTitle: "Зв'язок зі мною",
      contactLead: "Якщо маєш ідею для співпраці або проекту, напиши мені зручним способом.",
      googleMailLabel: "Google пошта",
      googleMailValue: "Відкрити форму зворотного зв'язку",
      policyLabel: "Політика конфіденційності",
      projectNotFoundTitle: "Проект не знайдено",
      projectNotFoundText: "Проект з таким ID відсутній. Перевір посилання або додай його в адмінці.",
      projectDownloadBase: "Скачати APK",
      projectDownloadWithFilePrefix: "Скачати APK:",
      project_section_screenshots: "Скріншоти",
      project_section_description: "Опис",
      project_section_tech: "Технології",
      project_section_meta: "Метадані",
      project_section_release: "Опис Версії",
      project_section_links: "Посилання",
      project_download_title: "Скачати APK",
      project_download_kicker: "Актуальна версія додатку доступна для прямого завантаження.",
      project_download_unavailable: "На даний час проект в розробці.",
      project_tester_open: "Доєднатись до команди тестувальників",
      tester_modal_title: "Доєднатись до команди тестувальників",
      tester_modal_text:
        "Щоб долучитись, вкажіть вашу Gmail-пошту та натисніть Доєднатись. Після цього просто очікуйте відповідь.",
      tester_captcha_placeholder: "Введіть результат CAPTCHA",
      tester_cancel: "Скасувати",
      tester_join: "Доєднатись",
      project_meta_id: "ID",
      project_meta_status: "Статус",
      project_meta_updated: "Оновлено",
      project_meta_version: "Версія",
      policyMissingText:
        "Текст політики ще не заповнений. Додай його через адмін-конструктор проектів.",
      policyNotFoundTitle: "Політику не знайдено",
      policyNotFoundText: "Політика для цього проекту ще не створена.",
      policyMetaStatus: "Статус",
      policyMetaUpdated: "Оновлено",
      policyOpen: "Відкрити політику",
      feedbackFillAll: "Заповніть усі поля форми.",
      feedbackEmailInvalid: "Вкажіть коректну email-пошту.",
      feedbackOpened: "Відкрито готовий лист у Gmail. Перевірте і натисніть Надіслати.",
      feedbackKicker: "Зворотний зв'язок",
      feedbackTitle: "Форма зв'язку",
      feedbackNote: "Заповніть поля нижче та натисніть Відправити. Відкриється Gmail з уже підготовленим листом.",
      feedbackName: "Ваше ім'я",
      feedbackEmail: "Ваш E-mail",
      feedbackSubject: "Тема",
      feedbackMessage: "Повідомлення",
      feedbackSend: "Відправити",
      feedbackBack: "Назад до контактів",
      privacyIndexTitle: "Політики конфіденційності додатків",
      privacyIndexDesc:
        "Тут розміщуються окремі політики для кожного додатку або проекту. Такий формат дозволяє точно описувати, які дані обробляються, які сервіси підключені (Firebase, рекламні мережі, AI API) та як користувач може керувати своїми даними в конкретному продукті.",
      policyMetaTitle: "Метадані",
      policyTextTitle: "Текст політики",
      policyLinksTitle: "Посилання",
      policyOpenProject: "Відкрити сторінку проекту",
      policyBackList: "Повернутись до списку політик",
      policyTitlePrefix: "Політика конфіденційності"
    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navContacts: "Contacts",
      navPolicies: "Policies",
      homeTitle: "Home",
      aboutKicker: "About",
      aboutTitle: "Turning ideas into quality code",
      aboutLead:
        "I am MAXONIK. My development approach is focused on building AI-assisted products that stand out in quality and efficiency. I work from idea and architecture to release and long-term support.",
      whatIDoTitle: "What I do",
      whatIDoText:
        "I build mobile and web solutions, design project architecture, optimize performance, and deliver products to a stable production level.",
      keySkillsTitle: "Core skills",
      workApproachTitle: "Work approach",
      workApproachText:
        "I focus on clean code, scalable structure, stability, and regular updates. For me, a product must be beautiful, fast, and reliable at the same time.",
      aiApproachTitle: "My AI approach in development",
      aiApproachP1:
        "I position myself as an AI automation-oriented developer using AI capabilities to quickly build stylish websites and modern apps for specific goals.",
      aiApproachP2:
        "I understand code at a practical level, keep learning constantly, and improve technical depth with every project. This site is a clear example of my current skill level from idea and structure to design, content, and implementation.",
      technicalPracticeTitle: "Technical practice in my projects",
      projectsKicker: "Projects",
      projectsTitle: "My portfolio",
      projectsEmpty: "No projects have been added yet. Open the constructor and create your first project.",
      contactKicker: "Contacts",
      contactTitle: "Get in touch",
      contactLead: "If you have an idea for collaboration or a project, contact me using any convenient method.",
      googleMailLabel: "Google Mail",
      googleMailValue: "Open feedback form",
      policyLabel: "Privacy policy",
      projectNotFoundTitle: "Project not found",
      projectNotFoundText: "No project with this ID was found. Check the link or add it in admin.",
      projectDownloadBase: "Download APK",
      projectDownloadWithFilePrefix: "Download APK:",
      project_section_screenshots: "Screenshots",
      project_section_description: "Description",
      project_section_tech: "Technologies",
      project_section_meta: "Metadata",
      project_section_release: "Release notes",
      project_section_links: "Links",
      project_download_title: "Download APK",
      project_download_kicker: "The latest app build is available for direct download.",
      project_download_unavailable: "The project is currently in development.",
      project_tester_open: "Join beta testers team",
      tester_modal_title: "Join beta testers team",
      tester_modal_text:
        "To join, enter your Gmail address and click Join. Then wait for our reply.",
      tester_captcha_placeholder: "Enter CAPTCHA result",
      tester_cancel: "Cancel",
      tester_join: "Join",
      project_meta_id: "ID",
      project_meta_status: "Status",
      project_meta_updated: "Updated",
      project_meta_version: "Version",
      policyMissingText: "Policy text is not filled in yet. Add it via the admin constructor.",
      policyNotFoundTitle: "Policy not found",
      policyNotFoundText: "There is no policy for this project yet.",
      policyMetaStatus: "Status",
      policyMetaUpdated: "Updated",
      policyOpen: "Open policy",
      feedbackFillAll: "Please fill in all fields.",
      feedbackEmailInvalid: "Please enter a valid email address.",
      feedbackOpened: "A prefilled Gmail draft is open. Review it and click Send.",
      feedbackKicker: "Feedback",
      feedbackTitle: "Contact form",
      feedbackNote: "Fill in the fields below and click Send. Gmail will open with a prepared message.",
      feedbackName: "Your name",
      feedbackEmail: "Your e-mail",
      feedbackSubject: "Subject",
      feedbackMessage: "Message",
      feedbackSend: "Send",
      feedbackBack: "Back to contacts",
      privacyIndexTitle: "App privacy policies",
      privacyIndexDesc:
        "Here you can find separate policies for each app or project. This format helps clearly describe which data is processed, which services are connected (Firebase, ad networks, AI APIs), and how users can manage their data in each product.",
      policyMetaTitle: "Metadata",
      policyTextTitle: "Policy text",
      policyLinksTitle: "Links",
      policyOpenProject: "Open project page",
      policyBackList: "Back to policy list",
      policyTitlePrefix: "Privacy policy"
    }
  };

  const normalizedLang = (value) => (String(value || "").toLowerCase() === "en" ? "en" : "uk");
  let currentLanguage = normalizedLang(localStorage.getItem(LANGUAGE_STORAGE_KEY));
  const tr = (key) => I18N[currentLanguage]?.[key] || I18N.uk[key] || "";

  const setTextIf = (selector, key) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = tr(key);
    }
  };

  const setAttrIf = (selector, attr, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.setAttribute(attr, value);
    }
  };

  const applyStaticTranslations = () => {
    document.documentElement.lang = currentLanguage;

    if (document.querySelector("#about.about-section")) {
      setTextIf('.topnav a[href="#home"]', "navHome");
      setTextIf('.topnav a[href="#about"]', "navAbout");
      setTextIf('.topnav-project-nav a[href="#projects"]', "navProjects");
      setTextIf('.topnav a[href="#contact"]', "navContacts");
      setTextIf('.topnav a[href="privacy/index.html"]', "navPolicies");
      setTextIf("#home h1", "homeTitle");
      setTextIf("#about .section-kicker", "aboutKicker");
      setTextIf("#about h2", "aboutTitle");
      setTextIf("#about .about-lead", "aboutLead");
      setTextIf("#about .about-item:nth-of-type(1) h3", "whatIDoTitle");
      setTextIf("#about .about-item:nth-of-type(1) p", "whatIDoText");
      setTextIf("#about .about-item:nth-of-type(2) h3", "keySkillsTitle");
      setTextIf("#about .about-item:nth-of-type(3) h3", "workApproachTitle");
      setTextIf("#about .about-item:nth-of-type(3) p", "workApproachText");
      setTextIf("#about .about-skill-note h3:nth-of-type(1)", "aiApproachTitle");
      setTextIf("#about .about-skill-note p:nth-of-type(1)", "aiApproachP1");
      setTextIf("#about .about-skill-note p:nth-of-type(2)", "aiApproachP2");
      setTextIf("#about .about-skill-note h3:nth-of-type(2)", "technicalPracticeTitle");
      setTextIf("#projects .section-kicker", "projectsKicker");
      setTextIf("#projects h2", "projectsTitle");
      setTextIf("[data-projects-empty]", "projectsEmpty");
      setTextIf("#contact .section-kicker", "contactKicker");
      setTextIf("#contact h2", "contactTitle");
      setTextIf("#contact .contact-lead", "contactLead");
      setTextIf("#contact .contact-item:nth-of-type(1) .contact-label", "googleMailLabel");
      setTextIf("#contact .contact-item:nth-of-type(1) .contact-value", "googleMailValue");
      setTextIf("#contact .contact-item:nth-of-type(3) .contact-label", "policyLabel");
    }

    if (document.querySelector("[data-project-page]")) {
      setTextIf('.topnav a[href="index.html#home"]', "navHome");
      setTextIf("[data-project-nav-open]", "navProjects");
      setTextIf('.topnav a[href="privacy/index.html"]', "navPolicies");
      setTextIf("[data-project-screenshots-block] h2", "project_section_screenshots");
      setTextIf(".project-main > section:nth-of-type(3) h2", "project_section_description");
      setTextIf(".project-main > section:nth-of-type(4) h2", "project_section_tech");
      setTextIf(".project-main > section:nth-of-type(5) h2", "project_section_meta");
      setTextIf(".project-main > section:nth-of-type(6) h2", "project_section_release");
      setTextIf("[data-project-download-block] h2", "project_download_title");
      setTextIf("[data-project-download-block] .project-download-kicker", "project_download_kicker");
      setTextIf("[data-project-download-unavailable]", "project_download_unavailable");
      setTextIf("[data-tester-open]", "project_tester_open");
      setTextIf("[data-tester-modal] h3", "tester_modal_title");
      setTextIf("[data-tester-modal] p", "tester_modal_text");
      setAttrIf('[name="testerCaptcha"]', "placeholder", tr("tester_captcha_placeholder"));
      setTextIf("[data-tester-close]", "tester_cancel");
      setTextIf('[data-tester-form] button[type="submit"]', "tester_join");
      setTextIf(".project-main > section:last-of-type h2", "project_section_links");
      setTextIf(".project-meta-item:nth-of-type(1) strong", "project_meta_id");
      setTextIf(".project-meta-item:nth-of-type(2) strong", "project_meta_status");
      setTextIf(".project-meta-item:nth-of-type(3) strong", "project_meta_updated");
      setTextIf(".project-meta-item:nth-of-type(4) strong", "project_meta_version");
    }

    if (document.querySelector(".policy-shell .policy-list")) {
      setTextIf('.topnav a[href="../index.html#home"]', "navHome");
      setTextIf('.topnav-project-nav a[href="../index.html#projects"]', "navProjects");
      setTextIf(".policy-hero h1", "privacyIndexTitle");
      setTextIf(".policy-hero p:last-of-type", "privacyIndexDesc");
    }

    if (document.querySelector("[data-policy-page]")) {
      setTextIf('.topnav a[href="../index.html#home"]', "navHome");
      setTextIf('.topnav-project-nav a[href="../index.html#projects"]', "navProjects");
      setTextIf(".policy-main section:nth-of-type(2) h2", "policyMetaTitle");
      setTextIf(".policy-main section:nth-of-type(3) h2", "policyTextTitle");
      setTextIf(".policy-main section:nth-of-type(4) h2", "policyLinksTitle");
      setTextIf("[data-policy-project-link]", "policyOpenProject");
      setTextIf('.policy-links a[href="index.html"]', "policyBackList");
    }

    if (document.querySelector("[data-feedback-page]")) {
      setTextIf('.topnav a[href="index.html#home"]', "navHome");
      setTextIf('.topnav a[href="index.html#projects"]', "navProjects");
      setTextIf('.topnav a[href="privacy/index.html"]', "navPolicies");
      setTextIf(".feedback-main .section-kicker", "feedbackKicker");
      setTextIf(".feedback-main h1", "feedbackTitle");
      setTextIf(".feedback-note", "feedbackNote");
      setTextIf('.feedback-form label:nth-of-type(1) .feedback-label-text', "feedbackName");
      setTextIf('.feedback-form label:nth-of-type(2) .feedback-label-text', "feedbackEmail");
      setTextIf('.feedback-form label:nth-of-type(3) .feedback-label-text', "feedbackSubject");
      setTextIf('.feedback-form label:nth-of-type(4) .feedback-label-text', "feedbackMessage");
      setTextIf('.feedback-actions button[type="submit"]', "feedbackSend");
      setTextIf('.feedback-actions a[href="index.html#contact"]', "feedbackBack");
    }
  };

  const initLanguageSwitcher = () => {
    if (document.querySelector("[data-admin-page]") || document.querySelector("[data-admin-login-page]")) {
      return;
    }

    const nav = document.querySelector(".topnav");
    if (!nav || nav.querySelector(".lang-switch")) {
      return;
    }

    const switcher = document.createElement("div");
    switcher.className = "lang-switch";

    const makeBtn = (lang, label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `lang-btn${currentLanguage === lang ? " is-active" : ""}`;
      btn.textContent = label;
      btn.addEventListener("click", () => {
        if (currentLanguage === lang) {
          return;
        }
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        window.location.reload();
      });
      return btn;
    };

    switcher.append(makeBtn("uk", "UA"), makeBtn("en", "EN"));
    nav.appendChild(switcher);
  };

  const formatDownloadButtonText = (fileName = "") => {
    const cleanName = String(fileName || "").trim();
    if (!cleanName) {
      return tr("projectDownloadBase");
    }
    return `${tr("projectDownloadWithFilePrefix")} ${cleanName}`;
  };

  const DEFAULT_GITHUB_SYNC_SETTINGS = {
    enabled: false,
    owner: "MAXONIKSS",
    repo: "Portfolio",
    branch: "main",
    path: "projects/projects-data.json",
    token: ""
  };

  const normalizeGitHubSyncSettings = (value) => {
    const source = value && typeof value === "object" ? value : {};
    return {
      enabled: Boolean(source.enabled),
      owner: String(source.owner || DEFAULT_GITHUB_SYNC_SETTINGS.owner).trim(),
      repo: String(source.repo || DEFAULT_GITHUB_SYNC_SETTINGS.repo).trim(),
      branch: String(source.branch || DEFAULT_GITHUB_SYNC_SETTINGS.branch).trim(),
      path: String(source.path || DEFAULT_GITHUB_SYNC_SETTINGS.path).trim(),
      token: String(source.token || "").trim()
    };
  };

  const readGitHubSyncSettings = () => {
    try {
      const raw = localStorage.getItem(GITHUB_SYNC_SETTINGS_KEY);
      if (!raw) {
        return { ...DEFAULT_GITHUB_SYNC_SETTINGS };
      }
      return normalizeGitHubSyncSettings(JSON.parse(raw));
    } catch {
      return { ...DEFAULT_GITHUB_SYNC_SETTINGS };
    }
  };

  const saveGitHubSyncSettings = (settings) => {
    const normalized = normalizeGitHubSyncSettings(settings);
    localStorage.setItem(GITHUB_SYNC_SETTINGS_KEY, JSON.stringify(normalized));
    return normalized;
  };

  const utf8ToBase64 = (value) => {
    const bytes = new TextEncoder().encode(String(value || ""));
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  };

  const syncProjectsToGitHub = async (projects, reason, settings) => {
    const current = normalizeGitHubSyncSettings(settings);
    if (!current.enabled) {
      return { ok: true, skipped: true };
    }

    if (!current.owner || !current.repo || !current.branch || !current.path || !current.token) {
      return {
        ok: false,
        error: "GitHub sync не налаштовано: перевір owner/repo/branch/path/token."
      };
    }

    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${current.token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    };

    const endpoint =
      `https://api.github.com/repos/${encodeURIComponent(current.owner)}/${encodeURIComponent(current.repo)}` +
      `/contents/${current.path.replace(/^\/+/, "")}`;

    let existingSha = "";
    try {
      const getResponse = await fetch(`${endpoint}?ref=${encodeURIComponent(current.branch)}`, {
        method: "GET",
        headers
      });

      if (getResponse.status !== 404) {
        const getData = await getResponse.json().catch(() => null);
        if (!getResponse.ok) {
          return {
            ok: false,
            error: `GitHub sync GET failed (${getResponse.status}): ${String(getData?.message || "невідома помилка")}`
          };
        }
        existingSha = String(getData?.sha || "").trim();
      }
    } catch {
      return { ok: false, error: "GitHub sync GET failed: немає доступу до GitHub API." };
    }

    const payload = {
      app: "MAXONIK",
      version: EXPORT_VERSION,
      source: "admin-auto-sync",
      updatedAt: new Date().toISOString(),
      projects: Array.isArray(projects) ? projects : []
    };

    const putBody = {
      message: `Admin sync: ${String(reason || "update")}`,
      content: utf8ToBase64(JSON.stringify(payload, null, 2)),
      branch: current.branch
    };

    if (existingSha) {
      putBody.sha = existingSha;
    }

    try {
      const putResponse = await fetch(endpoint, {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(putBody)
      });

      const putData = await putResponse.json().catch(() => null);
      if (!putResponse.ok) {
        return {
          ok: false,
          error: `GitHub sync PUT failed (${putResponse.status}): ${String(putData?.message || "невідома помилка")}`
        };
      }

      return {
        ok: true,
        commitUrl: String(putData?.commit?.html_url || "").trim(),
        path: current.path
      };
    } catch {
      return { ok: false, error: "GitHub sync PUT failed: немає доступу до GitHub API." };
    }
  };

  const hasCyrillic = (value) => /[\u0400-\u04FF]/.test(String(value || ""));

  const normalizeTranslationInput = (value) => String(value || "").replace(/\s+/g, " ").trim();

  const readTranslateCache = () => {
    try {
      const raw = localStorage.getItem(AUTO_TRANSLATE_CACHE_KEY);
      if (!raw) {
        return {};
      }
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };

  let translateCache = readTranslateCache();
  const translateInFlight = new Map();

  const saveTranslateCache = () => {
    try {
      const entries = Object.entries(translateCache);
      const sliced = entries.slice(-AUTO_TRANSLATE_CACHE_LIMIT);
      translateCache = Object.fromEntries(sliced);
      localStorage.setItem(AUTO_TRANSLATE_CACHE_KEY, JSON.stringify(translateCache));
    } catch {
      // Ignore cache persistence failures.
    }
  };

  const autoTranslateText = async (value) => {
    const source = String(value || "");
    const normalized = normalizeTranslationInput(source);
    if (!normalized) {
      return source;
    }

    if (currentLanguage !== "en" || !hasCyrillic(normalized)) {
      return source;
    }

    const cacheKey = `uk|en|${normalized}`;
    if (translateCache[cacheKey]) {
      return translateCache[cacheKey];
    }

    if (translateInFlight.has(cacheKey)) {
      return translateInFlight.get(cacheKey);
    }

    const requestPromise = (async () => {
      try {
        const endpoint =
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(normalized)}` +
          "&langpair=uk|en";

        const response = await fetch(endpoint, {
          method: "GET",
          headers: { Accept: "application/json" }
        });

        if (!response.ok) {
          return source;
        }

        const data = await response.json().catch(() => null);
        const translated = String(data?.responseData?.translatedText || "").trim();
        if (!translated || hasCyrillic(translated)) {
          return source;
        }

        translateCache[cacheKey] = translated;
        saveTranslateCache();
        return translated;
      } catch {
        return source;
      } finally {
        translateInFlight.delete(cacheKey);
      }
    })();

    translateInFlight.set(cacheKey, requestPromise);
    return requestPromise;
  };

  const setTranslatedText = async (selector, sourceValue) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    const source = String(sourceValue || "");
    node.textContent = source;
    const translated = await autoTranslateText(source);
    if (node.isConnected && translated !== source) {
      node.textContent = translated;
    }
  };

  const setTranslatedHtml = async (selector, sourceValue) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    const source = String(sourceValue || "");
    node.innerHTML = asProjectHtml(source);
    const translated = await autoTranslateText(source);
    if (node.isConnected && translated !== source) {
      node.innerHTML = asProjectHtml(translated);
    }
  };

  const DEFAULT_PROJECTS = [
    {
      id: "calorie-ai",
      title: "Calorie AI",
      summary: "Додаток для аналізу калорій через AI API та щоденного контролю харчування.",
      purpose: "Допомагає оцінювати раціон, рахувати калорії та будувати щоденні харчові звички.",
      image: "assets/projects/calorie-ai.svg",
      tech: ["Flutter", "AI API", "Firebase"],
      status: "Плейсхолдер",
      updatedAt: "11.05.2026",
      appDownloadUrl: "",
      appFileName: "",
      screenshots: [],
      policyText:
        "Це базовий шаблон політики для проекту Calorie AI. Онови його в адмінці, щоб додати точні правила обробки даних, сторонні сервіси та строки зберігання."
    },
    {
      id: "fit-track",
      title: "Fit Track",
      summary: "Трекер прогресу з Firebase, який зберігає активність, цілі і персональні метрики.",
      purpose: "Дозволяє відстежувати прогрес тренувань і контролювати особисті цілі.",
      image: "assets/projects/fit-track.svg",
      tech: ["Flutter", "Firebase", "Analytics"],
      status: "Плейсхолдер",
      updatedAt: "11.05.2026",
      appDownloadUrl: "",
      appFileName: "",
      screenshots: [],
      policyText:
        "Це базовий шаблон політики для проекту Fit Track. Вкажи фактичні дані, які збирає додаток, і перелік інтегрованих сервісів."
    },
    {
      id: "smart-recipes",
      title: "Smart Recipes",
      summary: "Платформа підбору рецептів з рекомендаціями та монетизацією через рекламні блоки.",
      purpose: "Підбирає рецепти під цілі користувача і дає швидкі кулінарні рішення.",
      image: "assets/projects/smart-recipes.svg",
      tech: ["Flutter", "AI API", "Ads"],
      status: "Плейсхолдер",
      updatedAt: "11.05.2026",
      appDownloadUrl: "",
      appFileName: "",
      screenshots: [],
      policyText:
        "Це базовий шаблон політики для проекту Smart Recipes. Онови текст під фактичні інтеграції реклами та API."
    }
  ];

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const stripHtml = (value) => {
    const temp = document.createElement("div");
    temp.innerHTML = String(value ?? "");
    return (temp.textContent || temp.innerText || "").trim();
  };

  const asProjectHtml = (value) => {
    const source = String(value ?? "");
    if (/<[a-z][\s\S]*>/i.test(source)) {
      return source;
    }
    return escapeHtml(source).replace(/\n/g, "<br>");
  };

  const slugify = (value) =>
    String(value ?? "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  const formatBytes = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const toTechArray = (techValue) => {
    const source = Array.isArray(techValue) ? techValue : String(techValue || "").split(",");
    return source.map((item) => String(item).trim()).filter(Boolean);
  };

  const extractGoogleDriveFileId = (value) => {
    try {
      const url = new URL(value);
      const host = String(url.hostname || "").toLowerCase();
      const isDriveHost =
        host === "drive.google.com" ||
        host.endsWith(".drive.google.com") ||
        host === "docs.google.com" ||
        host === "drive.usercontent.google.com";

      if (!isDriveHost) {
        return "";
      }

      const pathMatch = String(url.pathname || "").match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (pathMatch?.[1]) {
        return pathMatch[1];
      }

      const fromQuery = String(url.searchParams.get("id") || "").trim();
      if (fromQuery) {
        return fromQuery;
      }

      return "";
    } catch {
      return "";
    }
  };

  const normalizeMediaUrl = (rawValue) => {
    let value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    // Support markdown-style links and pasted labels with URL inside.
    const markdownMatch = value.match(/\((https?:\/\/[^)\s]+)\)/i);
    if (markdownMatch?.[1]) {
      value = markdownMatch[1];
    } else {
      const directMatch = value.match(/https?:\/\/\S+/i);
      if (directMatch?.[0]) {
        value = directMatch[0];
      }
    }

    value = value.replace(/^['"<]+|[>'"\])]+$/g, "").trim();

    // Convert common share links to direct image endpoints when possible.
    const driveFileId = extractGoogleDriveFileId(value);
    if (driveFileId) {
      return `https://drive.google.com/uc?export=view&id=${encodeURIComponent(driveFileId)}`;
    }

    if (/^https?:\/\/www\.dropbox\.com\//i.test(value)) {
      return value.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace(/\?dl=0$/i, "");
    }

    return value;
  };

  const toUrlArray = (value) => {
    const source = Array.isArray(value)
      ? value
      : String(value || "")
          .split(/[\n,;]+/)
          .map((item) => item.replace(/^\s*[\-*•]+\s*/, ""));

    return source.map((item) => normalizeMediaUrl(item)).filter(Boolean);
  };

  const submitPortfolioMessage = async (payload) => {
    const asFallbackMailto = () => {
      if (payload?.type === "tester_join") {
        const subject = "Бажаю доєднатись до команди тестувальників";
        const body = [
          "Вітаю!",
          "",
          "Бажаю доєднатись до команди тестувальників.",
          `Моя пошта: ${String(payload.email || "").trim()}`,
          payload.projectTitle ? `Проект: ${payload.projectTitle}` : "",
          "",
          "Очікую на відповідь."
        ]
          .filter(Boolean)
          .join("\n");

        return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }

      const subject = `[Зворотний зв'язок] ${String(payload.subject || "").trim()}`;
      const body = [
        `Ім'я: ${String(payload.name || "").trim()}`,
        `Email: ${String(payload.email || "").trim()}`,
        "",
        "Повідомлення:",
        String(payload.message || "").trim()
      ].join("\n");

      return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const endpoint = String(window.__firebaseConfig?.formEndpoint || "").trim();
    if (!endpoint) {
      return {
        ok: false,
        error:
          "Сервер відправки не налаштований. Додай formEndpoint у firebase-config.js.",
        fallbackMailto: asFallbackMailto()
      };
    }

    let requestPayload = {};
    if (payload?.type === "tester_join") {
      requestPayload = {
        email: String(payload.email || "").trim(),
        type: "tester_join",
        projectTitle: String(payload.projectTitle || "").trim(),
        projectId: String(payload.projectId || "").trim(),
        pageUrl: String(payload.pageUrl || "").trim(),
        message: `Бажаю доєднатись з поштою ${String(payload.email || "").trim()}`,
        _subject: "Бажаю доєднатись до команди тестувальників",
        _template: "table"
      };
    } else if (payload?.type === "feedback") {
      requestPayload = {
        name: String(payload.name || "").trim(),
        email: String(payload.email || "").trim(),
        type: "feedback",
        pageUrl: String(payload.pageUrl || "").trim(),
        message: String(payload.message || "").trim(),
        _subject: `[Зворотний зв'язок] ${String(payload.subject || "").trim()}`,
        _template: "table"
      };
    } else {
      return {
        ok: false,
        error: "Невідомий тип форми.",
        fallbackMailto: asFallbackMailto()
      };
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(requestPayload)
      });

      const data = await response.json().catch(() => null);
      const hasExplicitError =
        data && typeof data === "object" && typeof data.error === "string" && data.error.trim().length > 0;
      const hasSuccessFlag =
        data &&
        typeof data === "object" &&
        (data.ok === true || data.success === true || data.success === "true");
      const hasSuccessMessage =
        data &&
        typeof data === "object" &&
        typeof data.message === "string" &&
        /sent|success|ok/i.test(data.message);

      // Some free form providers return 200 with minimal/non-standard JSON.
      const acceptedByProvider = response.ok && !hasExplicitError && (data === null || hasSuccessFlag || hasSuccessMessage);
      if (!acceptedByProvider) {
        return {
          ok: false,
          error: String((data && data.error) || `Помилка відправки (${response.status}).`),
          fallbackMailto: asFallbackMailto()
        };
      }

      return { ok: true };
    } catch {
      return {
        ok: false,
        error: "Не вдалося відправити форму. Перевір інтернет або доступність endpoint.",
        fallbackMailto: asFallbackMailto()
      };
    }
  };

  const buildPrivacyUrl = (projectId) => `privacy/policy.html?id=${encodeURIComponent(projectId)}`;

  const isFirebaseConfigValid = (config) => {
    if (!config) {
      return false;
    }
    const required = ["apiKey", "authDomain", "projectId", "appId"];
    return required.every((key) => typeof config[key] === "string" && config[key].trim().length > 0);
  };

  const getFirestoreDb = () => {
    if (typeof firebase === "undefined" || typeof firebase.firestore !== "function") {
      return null;
    }

    const config = window.__firebaseConfig;
    if (!isFirebaseConfigValid(config)) {
      return null;
    }

    try {
      const app = firebase.apps && firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(config);
      return app.firestore();
    } catch {
      return null;
    }
  };

  const getFirebaseStorage = () => {
    if (typeof firebase === "undefined" || typeof firebase.storage !== "function") {
      return null;
    }

    const config = window.__firebaseConfig;
    if (!isFirebaseConfigValid(config)) {
      return null;
    }

    try {
      const app = firebase.apps && firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(config);
      return app.storage();
    } catch {
      return null;
    }
  };

  const validateAppPackageFile = (file) => {
    if (!file) {
      return { ok: false, error: "APK файл не вибрано." };
    }

    const name = String(file.name || "").toLowerCase();
    if (!name.endsWith(".apk") && !name.endsWith(".xapk")) {
      return { ok: false, error: "Потрібен файл .apk або .xapk." };
    }

    if (file.size > APP_PACKAGE_MAX_BYTES) {
      return {
        ok: false,
        error: `Файл занадто великий (${formatBytes(file.size)}). Максимум: ${formatBytes(APP_PACKAGE_MAX_BYTES)}.`
      };
    }

    return { ok: true };
  };

  const uploadAppPackageToCloud = async (file, projectId) => {
    const storage = getFirebaseStorage();
    if (!storage) {
      return {
        ok: false,
        reason: "Firebase Storage недоступний. Додай firebase-storage-compat.js і перевір storageBucket у firebase-config.js"
      };
    }

    try {
      const safeFileName = String(file.name || "app.apk")
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9._-]/g, "-");
      const path = `apps/${projectId}/${Date.now()}-${safeFileName}`;
      const snapshot = await storage.ref(path).put(file, {
        contentType: file.type || "application/vnd.android.package-archive"
      });
      const url = await snapshot.ref.getDownloadURL();

      return {
        ok: true,
        url,
        fileName: file.name,
        storagePath: path
      };
    } catch (error) {
      return {
        ok: false,
        reason: error?.message || "Не вдалося завантажити APK у Firebase Storage"
      };
    }
  };

  const validateScreenshotFile = (file) => {
    if (!file) {
      return { ok: false, error: "Скріншот не вибрано." };
    }
    if (!String(file.type || "").startsWith("image/")) {
      return { ok: false, error: "Для скріншотів потрібні графічні файли." };
    }
    if (file.size > SCREENSHOT_MAX_BYTES) {
      return {
        ok: false,
        error: `Скріншот ${file.name} занадто великий (${formatBytes(file.size)}). Максимум: ${formatBytes(
          SCREENSHOT_MAX_BYTES
        )}.`
      };
    }
    return { ok: true };
  };

  const uploadScreenshotFilesToCloud = async (files, projectId) => {
    const storage = getFirebaseStorage();
    if (!storage) {
      return {
        ok: false,
        reason: "Firebase Storage недоступний для завантаження скріншотів"
      };
    }

    try {
      const uploadedUrls = [];
      for (const file of files) {
        const safeFileName = String(file.name || "screen.jpg")
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9._-]/g, "-");
        const path = `apps/${projectId}/screenshots/${Date.now()}-${safeFileName}`;
        const snapshot = await storage.ref(path).put(file, {
          contentType: file.type || "image/jpeg"
        });
        const url = await snapshot.ref.getDownloadURL();
        uploadedUrls.push(url);
      }

      return { ok: true, urls: uploadedUrls };
    } catch (error) {
      return {
        ok: false,
        reason: error?.message || "Не вдалося завантажити скріншоти"
      };
    }
  };

  const normalizeProject = (project, fallbackIndex = 0) => {
    const fallbackId = `project-${fallbackIndex + 1}`;
    const idFromTitle = slugify(project?.title || fallbackId);
    const id = slugify(project?.id) || idFromTitle || fallbackId;
    const title = String(project?.title || `Проект ${fallbackIndex + 1}`).trim();
    const summary = String(project?.summary || "Короткий опис проекту поки не заповнено.").trim();
    const purpose = String(project?.purpose || summary).trim();
    const image = String(project?.image || "assets/projects/calorie-ai.svg").trim();
    const status = String(project?.status || "В розробці").trim();
    const updatedAt = String(project?.updatedAt || "").trim();
    const policyText = String(project?.policyText || "").trim();
    const versionLabel = String(project?.versionLabel || "").trim();
    const versionNotes = String(project?.versionNotes || "").trim();
    const appDownloadUrl = String(project?.appDownloadUrl || "").trim();
    const appFileName = String(project?.appFileName || "").trim();
    const screenshots = toUrlArray(project?.screenshots);
    const tech = toTechArray(project?.tech);

    return {
      id,
      title,
      summary,
      purpose,
      image,
      status,
      updatedAt,
      versionLabel,
      versionNotes,
      tech,
      policyText,
      appDownloadUrl,
      appFileName,
      screenshots,
      privacyUrl: buildPrivacyUrl(id)
    };
  };

  const readProjects = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return DEFAULT_PROJECTS.map(normalizeProject);
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return DEFAULT_PROJECTS.map(normalizeProject);
      }
      return parsed.map(normalizeProject);
    } catch {
      return DEFAULT_PROJECTS.map(normalizeProject);
    }
  };

  const saveProjects = (projects) => {
    const normalized = projects.map(normalizeProject);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  };

  const syncProjectsFromCloud = async () => {
    const db = getFirestoreDb();
    if (!db) {
      return { ok: false, reason: "Firestore недоступний" };
    }

    try {
      const snapshot = await db.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOC_ID).get();
      if (!snapshot.exists) {
        return { ok: true, changed: false };
      }

      const data = snapshot.data();
      const items = Array.isArray(data?.items) ? data.items : null;
      if (!items || items.length === 0) {
        return { ok: true, changed: false };
      }

      const normalized = items.map(normalizeProject);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      return { ok: true, changed: true, projects: normalized };
    } catch (error) {
      return {
        ok: false,
        reason: error?.message || "Не вдалося синхронізувати дані з Firestore"
      };
    }
  };

  const saveProjectsToCloud = async (projects) => {
    const db = getFirestoreDb();
    if (!db) {
      return { ok: false, reason: "Firestore недоступний" };
    }

    try {
      const normalized = projects.map(normalizeProject);
      await db
        .collection(FIRESTORE_COLLECTION)
        .doc(FIRESTORE_DOC_ID)
        .set(
          {
            items: normalized,
            updatedAt: new Date().toISOString()
          },
          { merge: true }
        );

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        reason: error?.message || "Не вдалося зберегти дані у Firestore"
      };
    }
  };

  const getProjectById = (projectId) => {
    const projects = readProjects();
    return projects.find((project) => project.id === projectId) ?? null;
  };

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  };

  const setHtml = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = value;
    }
  };

  const readImageFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("Не вдалося прочитати файл."));
      reader.readAsDataURL(file);
    });

  const readImageSize = (dataUrl) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve({ width: image.naturalWidth, height: image.naturalHeight });
      image.onerror = () => reject(new Error("Файл не є валідним зображенням."));
      image.src = dataUrl;
    });

  const validateImageFile = async (file) => {
    if (!file) {
      return { ok: false, error: "Файл не вибрано." };
    }
    if (!file.type.startsWith("image/")) {
      return { ok: false, error: "Потрібно вибрати графічний файл (png, jpg, webp тощо)." };
    }
    if (file.size > IMAGE_MAX_BYTES) {
      return {
        ok: false,
        error: `Файл занадто великий (${formatBytes(file.size)}). Максимум: ${formatBytes(IMAGE_MAX_BYTES)}.`
      };
    }

    const dataUrl = await readImageFileAsDataUrl(file);
    const { width, height } = await readImageSize(dataUrl);

    if (width < IMAGE_MIN_WIDTH || height < IMAGE_MIN_HEIGHT) {
      return {
        ok: false,
        error: `Мінімальний розмір: ${IMAGE_MIN_WIDTH}x${IMAGE_MIN_HEIGHT}. Поточний: ${width}x${height}.`
      };
    }

    const ratio = width / height;
    const idealRatio = IMAGE_IDEAL_WIDTH / IMAGE_IDEAL_HEIGHT;
    const ratioDiff = Math.abs(ratio - idealRatio);

    if (ratioDiff > 0.12) {
      return {
        ok: false,
        error: `Пропорції не підходять для картки. Рекомендується формат 16:9 (наприклад ${IMAGE_IDEAL_WIDTH}x${IMAGE_IDEAL_HEIGHT}).`
      };
    }

    return {
      ok: true,
      dataUrl,
      width,
      height,
      size: file.size
    };
  };

  const initDrum = () => {
    const drum = document.querySelector("[data-drum]");
    if (!drum) {
      return;
    }

    const viewport = drum.querySelector("[data-viewport]");
    const track = drum.querySelector("[data-track]");
    const dotsWrap = document.querySelector("[data-dots]");
    const prevBtn = drum.querySelector('[data-action="prev"]');
    const nextBtn = drum.querySelector('[data-action="next"]');
    const emptyState = document.querySelector("[data-projects-empty]");

    if (!viewport || !track || !dotsWrap) {
      return;
    }

    const projects = readProjects();
    track.innerHTML = "";
    dotsWrap.innerHTML = "";

    if (projects.length === 0) {
      prevBtn?.setAttribute("hidden", "true");
      nextBtn?.setAttribute("hidden", "true");
      emptyState?.removeAttribute("hidden");
      return;
    }

    prevBtn?.removeAttribute("hidden");
    nextBtn?.removeAttribute("hidden");
    emptyState?.setAttribute("hidden", "true");

    projects.forEach((project) => {
      const href = `project.html?id=${encodeURIComponent(project.id)}`;
      const card = document.createElement("a");
      card.className = "project-card";
      card.href = href;
      card.setAttribute("aria-label", `Відкрити проект ${project.title}`);
      card.innerHTML = `
        <img src="${escapeHtml(project.image)}" alt="Прев'ю додатку ${escapeHtml(project.title)}" class="project-image" />
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(stripHtml(project.summary))}</p>
      `;
      track.appendChild(card);

      if (currentLanguage === "en") {
        const titleNode = card.querySelector("h3");
        const summaryNode = card.querySelector("p");
        void autoTranslateText(project.title).then((translated) => {
          if (titleNode && translated !== project.title) {
            titleNode.textContent = translated;
          }
        });
        void autoTranslateText(stripHtml(project.summary)).then((translated) => {
          if (summaryNode && translated !== stripHtml(project.summary)) {
            summaryNode.textContent = translated;
          }
        });
      }
    });

    const cards = Array.from(track.querySelectorAll(".project-card"));
    let index = 0;
    let isDragging = false;
    let startX = 0;
    let dragDelta = 0;

    const clampIndex = (value) => {
      if (value < 0) {
        return cards.length - 1;
      }
      if (value >= cards.length) {
        return 0;
      }
      return value;
    };

    const dots = cards.map((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.className = "drum-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Перейти до проекту ${dotIndex + 1}`);
      dot.addEventListener("click", () => setIndex(dotIndex));
      dotsWrap.appendChild(dot);
      return dot;
    });

    const updateDots = () => {
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    };

    const updateTrack = (animate = true) => {
      track.style.transition = animate ? "transform 320ms ease" : "none";
      track.style.transform = `translateX(${-index * 100}%)`;
      updateDots();
    };

    const setIndex = (value, animate = true) => {
      index = clampIndex(value);
      updateTrack(animate);
    };

    const moveNext = () => setIndex(index + 1);
    const movePrev = () => setIndex(index - 1);

    prevBtn?.addEventListener("click", movePrev);
    nextBtn?.addEventListener("click", moveNext);

    viewport.addEventListener("pointerdown", (event) => {
      isDragging = true;
      startX = event.clientX;
      dragDelta = 0;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
      updateTrack(false);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (!isDragging) {
        return;
      }
      dragDelta = event.clientX - startX;
      const cardWidth = viewport.clientWidth || 1;
      const dragPercent = (dragDelta / cardWidth) * 100;
      track.style.transform = `translateX(${-index * 100 + dragPercent}%)`;
    });

    const finishDrag = (event) => {
      if (!isDragging) {
        return;
      }
      isDragging = false;
      viewport.classList.remove("is-dragging");
      const threshold = Math.max(48, viewport.clientWidth * 0.12);

      if (dragDelta > threshold) {
        movePrev();
      } else if (dragDelta < -threshold) {
        moveNext();
      } else {
        const x = Number(event?.clientX);
        const y = Number(event?.clientY);
        const pointTarget = Number.isFinite(x) && Number.isFinite(y) ? document.elementFromPoint(x, y) : null;
        const card = pointTarget instanceof Element ? pointTarget.closest(".project-card") : null;
        if (card instanceof HTMLAnchorElement && card.href) {
          window.location.href = card.href;
          return;
        }
        updateTrack(true);
      }
    };

    viewport.addEventListener("pointerup", finishDrag);
    viewport.addEventListener("pointercancel", finishDrag);
    viewport.addEventListener("lostpointercapture", finishDrag);

    viewport.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaX) < 8 && Math.abs(event.deltaY) < 8) {
          return;
        }
        event.preventDefault();
        const direction = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        if (direction > 0) {
          moveNext();
        } else {
          movePrev();
        }
      },
      { passive: false }
    );

    drum.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        moveNext();
      }
      if (event.key === "ArrowLeft") {
        movePrev();
      }
    });

    setIndex(0, false);
  };

  const initProjectPage = () => {
    const projectPage = document.querySelector("[data-project-page]");
    if (!projectPage) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const projectId = slugify(params.get("id") || "");
    const project = getProjectById(projectId);

    if (!project) {
      setText("[data-project-title]", tr("projectNotFoundTitle"));
      setText("[data-project-summary]", tr("projectNotFoundText"));
      setText("[data-project-purpose]", "");
      setHtml("[data-project-tech]", "");
      return;
    }

    document.title = `MAXONIK | ${project.title}`;
    setText("[data-project-title]", project.title);
    setHtml("[data-project-summary]", asProjectHtml(project.summary));
    setHtml("[data-project-purpose]", asProjectHtml(project.purpose));
    setText("[data-project-status]", project.status || "-");
    setText("[data-project-updated]", project.updatedAt || "-");
    setText("[data-project-version]", project.versionLabel || "-");
    setText("[data-project-id]", project.id);

    if (currentLanguage === "en") {
      void Promise.all([
        setTranslatedText("[data-project-title]", project.title),
        setTranslatedHtml("[data-project-summary]", project.summary),
        setTranslatedHtml("[data-project-purpose]", project.purpose),
        setTranslatedText("[data-project-status]", project.status || "-"),
        setTranslatedText("[data-project-version]", project.versionLabel || "-")
      ]);
    }

    const imageNode = document.querySelector("[data-project-image]");
    if (imageNode) {
      imageNode.src = project.image;
      imageNode.alt = `Прев'ю проекту ${project.title}`;
    }

    const techNode = document.querySelector("[data-project-tech]");
    if (techNode) {
      techNode.innerHTML = project.tech.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

      if (currentLanguage === "en") {
        const techItems = Array.from(techNode.querySelectorAll("li"));
        techItems.forEach((itemNode, index) => {
          const original = String(project.tech[index] || "");
          if (!original) {
            return;
          }
          void autoTranslateText(original).then((translated) => {
            if (translated !== original && itemNode.isConnected) {
              itemNode.textContent = translated;
            }
          });
        });
      }
    }

    const privacyLink = document.querySelector("[data-project-privacy-link]");
    if (privacyLink) {
      privacyLink.href = project.privacyUrl;
    }

    const downloadBlock = document.querySelector("[data-project-download-block]");
    const downloadLink = document.querySelector("[data-project-download]");
    const downloadUnavailable = document.querySelector("[data-project-download-unavailable]");
    const testerOpenBtn = document.querySelector("[data-tester-open]");
    const testerModal = document.querySelector("[data-tester-modal]");
    const testerCloseBtn = document.querySelector("[data-tester-close]");
    const testerForm = document.querySelector("[data-tester-form]");
    const testerStatus = document.querySelector("[data-tester-status]");
    const testerCaptchaQuestion = document.querySelector("[data-tester-captcha-question]");
    let testerCaptchaAnswer = "";

    const rebuildTesterCaptcha = () => {
      const first = Math.floor(Math.random() * 9) + 1;
      const second = Math.floor(Math.random() * 9) + 1;
      testerCaptchaAnswer = String(first + second);
      if (testerCaptchaQuestion) {
        testerCaptchaQuestion.textContent = `${first} + ${second} = ?`;
      }
    };

    const closeTesterModal = () => {
      if (!testerModal) {
        return;
      }
      testerModal.setAttribute("hidden", "true");
      document.body.style.overflow = "";
      if (testerStatus) {
        testerStatus.textContent = "";
      }
      testerForm?.reset();
    };

    const openTesterModal = () => {
      if (!testerModal) {
        return;
      }
      rebuildTesterCaptcha();
      testerModal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      testerForm?.elements?.testerEmail?.focus?.();
    };

    testerOpenBtn?.addEventListener("click", openTesterModal);
    testerCloseBtn?.addEventListener("click", closeTesterModal);
    testerModal?.addEventListener("click", (event) => {
      if (event.target === testerModal) {
        closeTesterModal();
      }
    });

    testerForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = String(testerForm.elements.testerEmail?.value || "").trim();
      const captchaValue = String(testerForm.elements.testerCaptcha?.value || "").trim();

      if (!/^[a-z0-9._%+-]+@gmail\.com$/i.test(email)) {
        if (testerStatus) {
          testerStatus.textContent = "Вкажіть коректну Gmail-адресу у форматі name@gmail.com.";
        }
        rebuildTesterCaptcha();
        return;
      }

      if (!captchaValue || captchaValue !== testerCaptchaAnswer) {
        if (testerStatus) {
          testerStatus.textContent = "CAPTCHA не пройдена. Вкажіть правильний результат прикладу.";
        }
        rebuildTesterCaptcha();
        return;
      }

      if (testerStatus) {
        testerStatus.textContent = "Відправляю заявку...";
      }

      const submitResult = await submitPortfolioMessage({
        type: "tester_join",
        email,
        projectId: project.id,
        projectTitle: project.title,
        pageUrl: window.location.href,
        recipient: CONTACT_EMAIL
      });

      if (!submitResult.ok) {
        if (testerStatus) {
          testerStatus.textContent = submitResult.error || "Не вдалося відправити заявку.";
        }
        if (submitResult.fallbackMailto) {
          window.location.href = submitResult.fallbackMailto;
        }
        rebuildTesterCaptcha();
        return;
      }

      closeTesterModal();
      window.alert("Заявка відправлена. Очікуйте відповідь на вказану Gmail-пошту.");
    });

    document.addEventListener("keydown", (event) => {
      if (!testerModal || testerModal.hasAttribute("hidden")) {
        return;
      }
      if (event.key === "Escape") {
        closeTesterModal();
      }
    });

    if (downloadLink) {
      if (project.appDownloadUrl) {
        downloadLink.href = project.appDownloadUrl;
        downloadLink.removeAttribute("hidden");
        downloadLink.setAttribute("target", "_blank");
        downloadLink.setAttribute("rel", "noopener noreferrer");
        downloadLink.textContent = formatDownloadButtonText(project.appFileName || "");
        downloadUnavailable?.setAttribute("hidden", "true");
        downloadBlock?.removeAttribute("hidden");
      } else {
        downloadLink.removeAttribute("href");
        downloadLink.setAttribute("hidden", "true");
        if (downloadUnavailable) {
          downloadUnavailable.textContent = tr("project_download_unavailable");
          downloadUnavailable.removeAttribute("hidden");
        }
        downloadBlock?.removeAttribute("hidden");
      }
    }

    const releaseBlock = document.querySelector("[data-project-release-block]");
    const releaseNotesNode = document.querySelector("[data-project-version-notes]");
    if (releaseBlock && releaseNotesNode) {
      if (project.versionNotes) {
        releaseNotesNode.textContent = project.versionNotes;
        if (currentLanguage === "en") {
          void autoTranslateText(project.versionNotes).then((translated) => {
            if (translated !== project.versionNotes) {
              releaseNotesNode.textContent = translated;
            }
          });
        }
        releaseBlock.removeAttribute("hidden");
      } else {
        releaseBlock.setAttribute("hidden", "true");
      }
    }

    const screenshotsBlock = document.querySelector("[data-project-screenshots-block]");
    const screenshotsWrap = document.querySelector("[data-project-screenshots]");
    if (screenshotsBlock && screenshotsWrap) {
      let lightbox = document.querySelector("[data-project-lightbox]");
      if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.className = "project-lightbox";
        lightbox.setAttribute("data-project-lightbox", "");
        lightbox.setAttribute("hidden", "true");
        lightbox.innerHTML = `
          <button type="button" class="project-lightbox-close" data-project-lightbox-close aria-label="Закрити">x</button>
          <button type="button" class="project-lightbox-nav prev" data-project-lightbox-prev aria-label="Попередній скріншот"><</button>
          <img class="project-lightbox-image" data-project-lightbox-image alt="Повний скріншот" />
          <button type="button" class="project-lightbox-nav next" data-project-lightbox-next aria-label="Наступний скріншот">></button>
          <div class="project-lightbox-caption" data-project-lightbox-caption></div>
        `;
        document.body.appendChild(lightbox);
      }

      const lightboxImage = lightbox.querySelector("[data-project-lightbox-image]");
      const lightboxCaption = lightbox.querySelector("[data-project-lightbox-caption]");
      const closeBtn = lightbox.querySelector("[data-project-lightbox-close]");
      const prevBtn = lightbox.querySelector("[data-project-lightbox-prev]");
      const nextBtn = lightbox.querySelector("[data-project-lightbox-next]");
      const screenshotUrls = Array.isArray(project.screenshots) ? project.screenshots.slice() : [];
      let currentScreenshotIndex = 0;

      const renderLightbox = () => {
        if (!lightboxImage || screenshotUrls.length === 0) {
          return;
        }
        const safeIndex = (currentScreenshotIndex + screenshotUrls.length) % screenshotUrls.length;
        currentScreenshotIndex = safeIndex;
        lightboxImage.src = screenshotUrls[safeIndex];
        lightboxImage.alt = `Скріншот ${safeIndex + 1} проекту ${project.title}`;
        if (lightboxCaption) {
          lightboxCaption.textContent = `Скріншот ${safeIndex + 1} з ${screenshotUrls.length}`;
        }
      };

      const openLightbox = (index) => {
        if (!lightbox || screenshotUrls.length === 0) {
          return;
        }
        currentScreenshotIndex = Number(index) || 0;
        renderLightbox();
        lightbox.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
      };

      const closeLightbox = () => {
        if (!lightbox) {
          return;
        }
        lightbox.setAttribute("hidden", "true");
        document.body.style.overflow = "";
      };

      closeBtn?.addEventListener("click", closeLightbox);
      prevBtn?.addEventListener("click", (event) => {
        event.stopPropagation();
        currentScreenshotIndex -= 1;
        renderLightbox();
      });
      nextBtn?.addEventListener("click", (event) => {
        event.stopPropagation();
        currentScreenshotIndex += 1;
        renderLightbox();
      });

      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
          closeLightbox();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (!lightbox || lightbox.hasAttribute("hidden")) {
          return;
        }

        if (event.key === "Escape") {
          closeLightbox();
          return;
        }

        if (event.key === "ArrowLeft") {
          currentScreenshotIndex -= 1;
          renderLightbox();
          return;
        }

        if (event.key === "ArrowRight") {
          currentScreenshotIndex += 1;
          renderLightbox();
        }
      });

      screenshotsWrap.innerHTML = "";
      if (Array.isArray(project.screenshots) && project.screenshots.length > 0) {
        project.screenshots.forEach((url, idx) => {
          const img = document.createElement("img");
          img.className = "project-shot";
          img.src = url;
          img.alt = `Скріншот ${idx + 1} проекту ${project.title}`;
          img.setAttribute("role", "button");
          img.setAttribute("tabindex", "0");
          img.addEventListener("click", () => openLightbox(idx));
          img.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openLightbox(idx);
            }
          });
          screenshotsWrap.appendChild(img);
        });
        screenshotsBlock.removeAttribute("hidden");
      } else {
        screenshotsBlock.setAttribute("hidden", "true");
      }
    }
  };

  const initProjectTopbarSelect = () => {
    const nav = document.querySelector("[data-project-nav]");
    if (!nav) {
      return;
    }

    const openTrigger = nav.querySelector("[data-project-nav-open]");
    const toggle = nav.querySelector("[data-project-nav-toggle]");
    const list = nav.querySelector("[data-project-nav-list]");
    if (!toggle || !list) {
      return;
    }

    const projects = readProjects();
    const isPrivacyPath = /\/privacy\//.test(window.location.pathname.replaceAll("\\", "/"));
    const baseProjectPath = isPrivacyPath ? "../project.html" : "project.html";

    list.innerHTML = "";
    projects.forEach((project) => {
      const link = document.createElement("a");
      link.className = "topnav-project-option";
      link.href = `${baseProjectPath}?id=${encodeURIComponent(project.id)}`;
      link.textContent = project.title;
      list.appendChild(link);
    });

    const toggleList = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const isHidden = list.hasAttribute("hidden");
      if (isHidden) {
        list.removeAttribute("hidden");
      } else {
        list.setAttribute("hidden", "true");
      }
    };

    toggle.addEventListener("click", toggleList);
    openTrigger?.addEventListener("click", toggleList);

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        list.setAttribute("hidden", "true");
      }
    });
  };

  const initPrivacyIndex = () => {
    const list = document.querySelector("[data-policy-list]");
    if (!list) {
      return;
    }

    const projects = readProjects();
    list.innerHTML = "";

    projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "policy-item";
      article.innerHTML = `
        <div class="policy-name">${escapeHtml(project.title)}</div>
        <div class="policy-meta">${escapeHtml(tr("policyMetaStatus"))}: ${escapeHtml(project.status || "-")}. ${escapeHtml(
          tr("policyMetaUpdated")
        )}: ${escapeHtml(project.updatedAt || "-")}.</div>
        <div class="policy-links">
          <a href="policy.html?id=${encodeURIComponent(project.id)}">${escapeHtml(tr("policyOpen"))}</a>
        </div>
      `;
      list.appendChild(article);

      if (currentLanguage === "en") {
        const nameNode = article.querySelector(".policy-name");
        const statusValue = String(project.status || "-");
        const metaNode = article.querySelector(".policy-meta");

        void autoTranslateText(project.title).then((translatedTitle) => {
          if (nameNode && translatedTitle !== project.title) {
            nameNode.textContent = translatedTitle;
          }
        });

        void autoTranslateText(statusValue).then((translatedStatus) => {
          if (!metaNode) {
            return;
          }
          const nextStatus = translatedStatus !== statusValue ? translatedStatus : statusValue;
          metaNode.textContent = `${tr("policyMetaStatus")}: ${nextStatus}. ${tr("policyMetaUpdated")}: ${project.updatedAt || "-"}.`;
        });
      }
    });
  };

  const initPolicyPage = () => {
    const page = document.querySelector("[data-policy-page]");
    if (!page) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const projectId = slugify(params.get("id") || "");
    const project = getProjectById(projectId);

    if (!project) {
      setText("[data-policy-title]", tr("policyNotFoundTitle"));
      setText("[data-policy-updated]", "-");
      setText("[data-policy-project]", "-");
      setText("[data-policy-text]", tr("policyNotFoundText"));
      return;
    }

    document.title = `MAXONIK | ${tr("policyTitlePrefix")} | ${project.title}`;
    setText("[data-policy-title]", `${tr("policyTitlePrefix")} - ${project.title}`);
    setText("[data-policy-updated]", project.updatedAt || "-");
    setText("[data-policy-project]", project.title);
    setText(
      "[data-policy-text]",
      project.policyText || tr("policyMissingText")
    );

    if (currentLanguage === "en") {
      const policyTextSource = project.policyText || tr("policyMissingText");
      void Promise.all([
        setTranslatedText("[data-policy-project]", project.title),
        setTranslatedText("[data-policy-title]", `${tr("policyTitlePrefix")} - ${project.title}`),
        setTranslatedText("[data-policy-text]", policyTextSource)
      ]);
    }

    const projectLink = document.querySelector("[data-policy-project-link]");
    if (projectLink) {
      projectLink.href = `../project.html?id=${encodeURIComponent(project.id)}`;
    }
  };

  const initFeedbackPage = () => {
    const feedbackPage = document.querySelector("[data-feedback-page]");
    if (!feedbackPage) {
      return;
    }

    const form = feedbackPage.querySelector("[data-feedback-form]");
    const status = feedbackPage.querySelector("[data-feedback-status]");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = String(form.elements.name?.value || "").trim();
      const email = String(form.elements.email?.value || "").trim();
      const subject = String(form.elements.subject?.value || "").trim();
      const message = String(form.elements.message?.value || "").trim();

      if (!name || !email || !subject || !message) {
        if (status) {
          status.textContent = tr("feedbackFillAll");
        }
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        if (status) {
          status.textContent = tr("feedbackEmailInvalid");
        }
        return;
      }

      const mailSubject = `[Зворотний зв'язок] ${subject}`;
      const mailBody = [
        `Ім'я: ${name}`,
        `Email: ${email}`,
        "",
        "Повідомлення:",
        message
      ].join("\n");

      const gmailComposeUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}` +
        `&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      const opened = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        const fallbackMailto =
          `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}` +
          `&body=${encodeURIComponent(mailBody)}`;
        window.location.href = fallbackMailto;
      }

      form.reset();
      if (status) {
        status.textContent = tr("feedbackOpened");
      }
    });
  };

  const getAllowedAdminEmails = () =>
    Array.isArray(window.__firebaseConfig?.adminAllowedEmails)
      ? window.__firebaseConfig.adminAllowedEmails
          .map((email) => String(email || "").trim().toLowerCase())
          .filter(Boolean)
      : [];

  const isAllowedAdminEmail = (email) => {
    const allowedEmails = getAllowedAdminEmails();
    if (allowedEmails.length === 0) {
      return true;
    }
    return allowedEmails.includes(String(email || "").trim().toLowerCase());
  };

  const ensureAdminPreviewBar = () => {
    let bar = document.querySelector("[data-admin-preview-bar]");
    if (bar) {
      return bar;
    }

    bar = document.createElement("div");
    bar.className = "admin-preview-bar";
    bar.setAttribute("data-admin-preview-bar", "");
    bar.setAttribute("hidden", "true");
    bar.innerHTML = `
      <span class="admin-preview-label">Admin Mode</span>
      <a class="admin-preview-link" href="${window.location.pathname.includes("/privacy/") ? "../admin.html" : "admin.html"}">Конструктор</a>
      <button type="button" class="admin-preview-exit" data-admin-preview-exit>Вийти</button>
    `;
    document.body.appendChild(bar);
    return bar;
  };

  const initAdminPreviewMode = () => {
    if (document.querySelector("[data-admin-login-page]")) {
      return;
    }

    const authApi = window.__adminAuth;
    if (!authApi || !authApi.isConfigured) {
      return;
    }

    const bar = ensureAdminPreviewBar();
    const exitBtn = bar.querySelector("[data-admin-preview-exit]");

    authApi.onChange((user) => {
      if (user && isAllowedAdminEmail(user.email)) {
        sessionStorage.setItem(ADMIN_SESSION_FLAG, "1");
        bar.removeAttribute("hidden");
      } else {
        sessionStorage.removeItem(ADMIN_SESSION_FLAG);
        bar.setAttribute("hidden", "true");
      }
    });

    exitBtn?.addEventListener("click", () => {
      authApi
        .signOut()
        .catch(() => null)
        .finally(() => {
          sessionStorage.removeItem(ADMIN_SESSION_FLAG);
          bar.setAttribute("hidden", "true");
          if (window.location.pathname.endsWith("/admin.html") || window.location.pathname.endsWith("\\admin.html")) {
            window.location.replace("admin-login.html");
          }
        });
    });
  };

  const formatAuthError = (error) => {
    const code = String(error?.code || "");

    if (code === "auth/unauthorized-domain") {
      return "Google вхід недоступний для цього домену. Додай домен у Firebase Authentication -> Authorized domains.";
    }
    if (code === "auth/popup-blocked") {
      return "Браузер заблокував popup. Дозволь спливаючі вікна для цієї сторінки.";
    }
    if (code === "auth/operation-not-allowed") {
      return "У Firebase не увімкнено цей спосіб входу (Google або Email/Password).";
    }
    if (code === "auth/operation-not-supported-in-this-environment") {
      return "Google вхід через popup не працює з file://. Запусти сайт через https (GitHub Pages) або локальний http сервер.";
    }
    if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
      return "Невірний email або пароль.";
    }

    return error?.message || "Помилка авторизації.";
  };

  const initAdminLoginPage = () => {
    const loginRoot = document.querySelector("[data-admin-login-page]");
    if (!loginRoot) {
      return;
    }

    const guardForm = loginRoot.querySelector("[data-admin-login-form]");
    const guardStatus = loginRoot.querySelector("[data-admin-guard-status]");
    const googleLoginBtn = loginRoot.querySelector("[data-admin-google-login]");
    const authApi = window.__adminAuth;

    if (!authApi || !authApi.isConfigured) {
      if (guardStatus) {
        guardStatus.textContent = authApi?.reason
          ? `Firebase Auth не активовано: ${authApi.reason}`
          : "Firebase Auth не активовано. Перевір firebase-config.js";
      }
      return;
    }

    authApi.onChange((user) => {
      if (!user) {
        return;
      }

      if (!isAllowedAdminEmail(user.email)) {
        sessionStorage.removeItem(ADMIN_SESSION_FLAG);
        authApi.signOut().catch(() => null);
        if (guardStatus) {
          guardStatus.textContent = "Цей email не має доступу до адмін-панелі.";
        }
        return;
      }

      sessionStorage.setItem(ADMIN_SESSION_FLAG, "1");
      window.location.replace("admin.html");
    });

    guardForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = String(guardForm.elements.email?.value || "").trim();
      const password = String(guardForm.elements.password?.value || "");

      authApi
        .signIn(email, password)
        .then(() => {
          if (guardStatus) {
            guardStatus.textContent = "";
          }
          guardForm.reset();
        })
        .catch((error) => {
          if (guardStatus) {
            guardStatus.textContent = formatAuthError(error);
          }
        });
    });

    googleLoginBtn?.addEventListener("click", () => {
      if (!authApi.signInWithGoogle) {
        if (guardStatus) {
          guardStatus.textContent = "Google Sign-In не підключено в auth-bridge.";
        }
        return;
      }

      authApi.signInWithGoogle().catch((error) => {
        if (guardStatus) {
          guardStatus.textContent = formatAuthError(error);
        }
      });
    });
  };

  const initAdminPage = () => {
    const adminRoot = document.querySelector("[data-admin-page]");
    if (!adminRoot) {
      return;
    }

    const form = adminRoot.querySelector("[data-project-form]");
    const list = adminRoot.querySelector("[data-project-list]");
    const resetBtn = adminRoot.querySelector("[data-reset-defaults]");
    const formStatus = adminRoot.querySelector("[data-admin-status]");
    const imageFileInput = adminRoot.querySelector("[data-image-file]");
    const screenshotsFileInput = adminRoot.querySelector("[data-screenshots-files]");
    const appFileInput = adminRoot.querySelector("[data-app-file]");
    const imagePathInput = adminRoot.querySelector("[name='image']");
    const screenshotsInput = form.elements.screenshots;
    const appHint = adminRoot.querySelector("[data-app-hint]");
    const screenshotsHint = adminRoot.querySelector("[data-screenshots-hint]");
    const screenshotsPreview = adminRoot.querySelector("[data-screenshots-preview]");
    const screenshotsUrlChecks = adminRoot.querySelector("[data-screenshots-url-checks]");
    const imagePreview = adminRoot.querySelector("[data-image-preview]");
    const imageHint = adminRoot.querySelector("[data-image-hint]");
    const exportBtn = adminRoot.querySelector("[data-export-json]");
    const importBtn = adminRoot.querySelector("[data-import-json]");
    const importFileInput = adminRoot.querySelector("[data-import-file]");
    const adminMain = adminRoot.querySelector("[data-admin-main]");
    const logoutBtn = adminRoot.querySelector("[data-admin-logout]");
    const ghOwnerInput = adminRoot.querySelector("[data-gh-owner]");
    const ghRepoInput = adminRoot.querySelector("[data-gh-repo]");
    const ghBranchInput = adminRoot.querySelector("[data-gh-branch]");
    const ghPathInput = adminRoot.querySelector("[data-gh-path]");
    const ghTokenInput = adminRoot.querySelector("[data-gh-token]");
    const ghEnabledInput = adminRoot.querySelector("[data-gh-enabled]");
    const ghSaveSettingsBtn = adminRoot.querySelector("[data-gh-save-settings]");
    const ghClearTokenBtn = adminRoot.querySelector("[data-gh-clear-token]");
    const editingBanner = adminRoot.querySelector("[data-admin-editing]");
    const editingTitle = adminRoot.querySelector("[data-admin-editing-title]");
    const cancelEditBtn = adminRoot.querySelector("[data-admin-cancel-edit]");

    if (!form || !list || !formStatus) {
      return;
    }

    const unlockAdmin = () => {
      adminMain?.removeAttribute("hidden");
      logoutBtn?.removeAttribute("hidden");
    };

    const lockAdmin = () => {
      adminMain?.setAttribute("hidden", "true");
      logoutBtn?.setAttribute("hidden", "true");
    };

    const authApi = window.__adminAuth;

    if (!authApi || !authApi.isConfigured) {
      lockAdmin();
      window.location.replace("admin-login.html");
      return;
    }

    lockAdmin();

    authApi.onChange((user) => {
      if (!user) {
        sessionStorage.removeItem(ADMIN_SESSION_FLAG);
        lockAdmin();
        window.location.replace("admin-login.html");
        return;
      }

      if (!isAllowedAdminEmail(user.email)) {
        sessionStorage.removeItem(ADMIN_SESSION_FLAG);
        authApi.signOut().catch(() => null);
        lockAdmin();
        window.location.replace("admin-login.html");
        return;
      }

      sessionStorage.setItem(ADMIN_SESSION_FLAG, "1");
      unlockAdmin();
    });

    logoutBtn?.addEventListener("click", () => {
      authApi
        .signOut()
        .catch(() => null)
        .finally(() => {
          sessionStorage.removeItem(ADMIN_SESSION_FLAG);
          window.location.replace("admin-login.html");
        });
    });

    const state = {
      uploadedImageDataUrl: "",
      uploadedAppUrl: "",
      uploadedAppFileName: "",
      editingId: "",
      screenshotsCheckToken: 0,
      screenshotsCheckTimerId: 0
    };

    const richEditors = [];

    const syncRichField = (fieldName) => {
      const hidden = form.elements[fieldName];
      const editor = adminRoot.querySelector(`[data-rich-editor='${fieldName}']`);
      if (!hidden || !editor) {
        return;
      }
      hidden.value = editor.innerHTML.trim();
    };

    const setRichFieldValue = (fieldName, value) => {
      const hidden = form.elements[fieldName];
      const editor = adminRoot.querySelector(`[data-rich-editor='${fieldName}']`);
      if (!hidden || !editor) {
        return;
      }
      const html = String(value || "").trim();
      editor.innerHTML = html;
      hidden.value = html;
    };

    const initRichEditors = () => {
      const wraps = Array.from(adminRoot.querySelectorAll("[data-rich-wrap]"));
      wraps.forEach((wrap) => {
        const fieldName = String(wrap.getAttribute("data-rich-wrap") || "").trim();
        const editor = wrap.querySelector(`[data-rich-editor='${fieldName}']`);
        const hidden = form.elements[fieldName];
        if (!fieldName || !editor || !hidden) {
          return;
        }

        richEditors.push(fieldName);

        editor.addEventListener("input", () => syncRichField(fieldName));
        editor.addEventListener("blur", () => syncRichField(fieldName));
        editor.addEventListener("cut", () => {
          setTimeout(() => syncRichField(fieldName), 0);
        });
        editor.addEventListener("paste", (event) => {
          const text = event.clipboardData?.getData("text/plain") || "";

          // Some browsers do not expose clipboardData for Ctrl+V in this context.
          // In that case, allow native paste behavior instead of blocking it.
          if (!text) {
            setTimeout(() => syncRichField(fieldName), 0);
            return;
          }

          event.preventDefault();
          const html = escapeHtml(text).replace(/\n/g, "<br>");
          document.execCommand("insertHTML", false, html);
          syncRichField(fieldName);
        });

        const controls = Array.from(wrap.querySelectorAll("[data-rich-cmd]"));
        controls.forEach((control) => {
          if (control instanceof HTMLButtonElement) {
            control.addEventListener("click", () => {
              const cmd = String(control.getAttribute("data-rich-cmd") || "").trim();
              if (!cmd) {
                return;
              }
              editor.focus();
              document.execCommand(cmd, false, null);
              syncRichField(fieldName);
            });
          }

          if (control instanceof HTMLSelectElement) {
            control.addEventListener("change", () => {
              const cmd = String(control.getAttribute("data-rich-cmd") || "").trim();
              if (!cmd || !control.value) {
                return;
              }
              editor.focus();
              document.execCommand(cmd, false, control.value);
              syncRichField(fieldName);
              control.value = "";
            });
          }
        });
      });
    };

    initRichEditors();

    const setStatus = (text, isError = false) => {
      formStatus.textContent = text;
      formStatus.classList.toggle("is-error", isError);
    };

    const fillGitHubSyncUi = () => {
      const settings = readGitHubSyncSettings();
      if (ghOwnerInput) {
        ghOwnerInput.value = settings.owner;
      }
      if (ghRepoInput) {
        ghRepoInput.value = settings.repo;
      }
      if (ghBranchInput) {
        ghBranchInput.value = settings.branch;
      }
      if (ghPathInput) {
        ghPathInput.value = settings.path;
      }
      if (ghTokenInput) {
        ghTokenInput.value = settings.token;
      }
      if (ghEnabledInput) {
        ghEnabledInput.checked = settings.enabled;
      }
    };

    const readGitHubSyncUi = () => {
      const existing = readGitHubSyncSettings();
      return normalizeGitHubSyncSettings({
        ...existing,
        owner: ghOwnerInput?.value ?? existing.owner,
        repo: ghRepoInput?.value ?? existing.repo,
        branch: ghBranchInput?.value ?? existing.branch,
        path: ghPathInput?.value ?? existing.path,
        token: ghTokenInput?.value ?? existing.token,
        enabled: ghEnabledInput?.checked ?? existing.enabled
      });
    };

    const persistGitHubSyncUi = () => {
      const saved = saveGitHubSyncSettings(readGitHubSyncUi());
      if (ghTokenInput) {
        ghTokenInput.value = saved.token;
      }
      if (ghEnabledInput) {
        ghEnabledInput.checked = saved.enabled;
      }
      return saved;
    };

    const syncProjectsToGitHubAndReport = async (projects, reason) => {
      const settings = readGitHubSyncUi();
      saveGitHubSyncSettings(settings);

      if (!settings.enabled) {
        return { ok: true, skipped: true };
      }

      setStatus("Синхронізую зміни у GitHub...");
      return syncProjectsToGitHub(projects, reason, settings);
    };

    fillGitHubSyncUi();

    ghSaveSettingsBtn?.addEventListener("click", () => {
      const saved = persistGitHubSyncUi();
      if (saved.enabled && !saved.token) {
        setStatus("Увімкнено GitHub sync, але токен порожній. Додай GitHub token.", true);
        return;
      }
      setStatus("Налаштування GitHub sync збережено.");
    });

    ghClearTokenBtn?.addEventListener("click", () => {
      if (ghTokenInput) {
        ghTokenInput.value = "";
      }
      const saved = persistGitHubSyncUi();
      if (saved.enabled) {
        setStatus("Токен очищено. GitHub sync потребує новий токен.", true);
      } else {
        setStatus("Токен очищено.");
      }
    });

    const checkImageUrlReachable = (url) =>
      new Promise((resolve) => {
        const image = new Image();
        let finished = false;

        const finalize = (ok) => {
          if (finished) {
            return;
          }
          finished = true;
          image.onload = null;
          image.onerror = null;
          resolve(ok);
        };

        const timeoutId = setTimeout(() => finalize(false), 7000);

        image.onload = () => {
          clearTimeout(timeoutId);
          finalize(true);
        };

        image.onerror = () => {
          clearTimeout(timeoutId);
          finalize(false);
        };

        image.referrerPolicy = "no-referrer";
        image.src = `${url}${url.includes("?") ? "&" : "?"}_check=${Date.now()}`;
      });

    const renderScreenshotsUrlChecks = async () => {
      if (!screenshotsInput || !screenshotsUrlChecks) {
        return;
      }

      const urls = toUrlArray(screenshotsInput.value || "").slice(0, SCREENSHOTS_MAX_COUNT);
      state.screenshotsCheckToken += 1;
      const token = state.screenshotsCheckToken;
      screenshotsUrlChecks.innerHTML = "";

      if (urls.length === 0) {
        screenshotsUrlChecks.setAttribute("hidden", "true");
        return;
      }

      screenshotsUrlChecks.removeAttribute("hidden");

      const rows = urls.map((url, index) => {
        const row = document.createElement("div");
        row.className = "admin-url-check-item";

        const urlNode = document.createElement("span");
        urlNode.className = "admin-url-check-url";
        urlNode.textContent = `${index + 1}. ${url}`;
        urlNode.title = url;

        const statusNode = document.createElement("span");
        statusNode.className = "admin-url-check-status";
        statusNode.textContent = "checking";

        row.append(urlNode, statusNode);
        screenshotsUrlChecks.appendChild(row);

        return { url, statusNode };
      });

      await Promise.all(
        rows.map(async ({ url, statusNode }) => {
          const ok = await checkImageUrlReachable(url);
          if (token !== state.screenshotsCheckToken) {
            return;
          }
          statusNode.textContent = ok ? "OK" : "Bad";
          statusNode.classList.add(ok ? "ok" : "bad");
        })
      );
    };

    const scheduleScreenshotsUrlChecks = () => {
      if (!screenshotsInput || !screenshotsUrlChecks) {
        return;
      }
      if (state.screenshotsCheckTimerId) {
        clearTimeout(state.screenshotsCheckTimerId);
      }
      state.screenshotsCheckTimerId = setTimeout(() => {
        renderScreenshotsUrlChecks().catch(() => null);
      }, 260);
    };

    const updatePreview = (src) => {
      if (!imagePreview) {
        return;
      }
      if (!src) {
        imagePreview.setAttribute("hidden", "true");
        imagePreview.src = "";
        return;
      }
      imagePreview.src = src;
      imagePreview.removeAttribute("hidden");
    };

    const resetFormState = () => {
      state.uploadedImageDataUrl = "";
      state.uploadedAppUrl = "";
      state.uploadedAppFileName = "";
      state.editingId = "";
      if (imageFileInput) {
        imageFileInput.value = "";
      }
      if (appFileInput) {
        appFileInput.value = "";
      }
      updatePreview("");
      if (imageHint) {
        imageHint.textContent = `Рекомендовано: ${IMAGE_IDEAL_WIDTH}x${IMAGE_IDEAL_HEIGHT}px (16:9), максимум ${formatBytes(
          IMAGE_MAX_BYTES
        )}.`;
      }
      if (appHint) {
        appHint.textContent =
          "Підтримуються .apk або .xapk. Після вибору файл завантажиться у Firebase Storage під час збереження проекту.";
      }
      if (screenshotsFileInput) {
        screenshotsFileInput.value = "";
      }
      if (screenshotsPreview) {
        screenshotsPreview.innerHTML = "";
      }
      if (screenshotsHint) {
        screenshotsHint.textContent = "До 8 скріншотів. Рекомендовано портретні зображення 9:16.";
      }
      if (screenshotsUrlChecks) {
        state.screenshotsCheckToken += 1;
        screenshotsUrlChecks.innerHTML = "";
        screenshotsUrlChecks.setAttribute("hidden", "true");
      }
    };

    const exportProjectsJson = () => {
      const projects = readProjects();
      const payload = {
        app: "MAXONIK",
        version: EXPORT_VERSION,
        exportedAt: new Date().toISOString(),
        projects
      };

      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      const datePart = new Date().toISOString().slice(0, 10);
      anchor.href = url;
      anchor.download = `maxonik-projects-${datePart}.json`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      setStatus("JSON експортовано успішно.");
    };

    const importProjectsJson = async (file) => {
      if (!file) {
        return;
      }

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const importedProjects = Array.isArray(parsed)
          ? parsed
          : Array.isArray(parsed?.projects)
            ? parsed.projects
            : null;

        if (!importedProjects || importedProjects.length === 0) {
          setStatus("JSON не містить коректного масиву проектів.", true);
          return;
        }

        const normalized = importedProjects.map(normalizeProject);
        const confirmed = window.confirm(
          `Імпорт знайдено: ${normalized.length} проект(ів). Замінити поточні дані в адмінці?`
        );
        if (!confirmed) {
          setStatus("Імпорт скасовано.");
          return;
        }

        saveProjects(normalized);
        const cloudResult = await saveProjectsToCloud(normalized);
        const ghResult = await syncProjectsToGitHubAndReport(normalized, "import projects from admin");
        renderList();
        form.reset();
        resetFormState();
        if (!ghResult.ok) {
          setStatus(`Імпорт виконано, але GitHub sync не вдався: ${ghResult.error}`, true);
        } else if (cloudResult.ok) {
          const suffix = ghResult.skipped ? "" : " GitHub оновлено.";
          setStatus(`Імпорт завершено: ${normalized.length} проект(ів) завантажено.${suffix}`);
        } else {
          const ghSuffix = ghResult.skipped ? "" : " GitHub оновлено.";
          setStatus(
            `Імпорт завершено локально: ${normalized.length} проект(ів). Cloud sync: ${cloudResult.reason}.${ghSuffix}`,
            true
          );
        }
      } catch {
        setStatus("Не вдалося імпортувати JSON. Перевір структуру файлу.", true);
      }
    };

    const renderList = () => {
      const projects = readProjects();
      list.innerHTML = "";

      projects.forEach((project) => {
        const item = document.createElement("article");
        item.className = `admin-project-item${state.editingId === project.id ? " is-editing" : ""}`;
        item.innerHTML = `
          <div class="admin-project-main">
            <h3>${escapeHtml(project.title)}</h3>
            <p>ID: ${escapeHtml(project.id)}</p>
            <p>${escapeHtml(stripHtml(project.summary))}</p>
            <p>Політика: <a href="${escapeHtml(project.privacyUrl)}" target="_blank" rel="noopener noreferrer">відкрити</a></p>
            <p>Версія: ${escapeHtml(project.versionLabel || "-")}</p>
            <p>APK: ${project.appDownloadUrl ? "доступний" : "не додано"}</p>
          </div>
          <div class="admin-project-actions">
            <button type="button" data-edit="${escapeHtml(project.id)}">Редагувати</button>
            <button type="button" data-delete="${escapeHtml(project.id)}">Видалити</button>
          </div>
        `;
        list.appendChild(item);
      });
    };

    const fillForm = (project) => {
      state.editingId = project.id;
      state.uploadedImageDataUrl = "";
      form.elements.id.value = project.id;
      form.elements.title.value = project.title;
      setRichFieldValue("summary", project.summary);
      setRichFieldValue("purpose", project.purpose);
      form.elements.image.value = project.image;
      form.elements.tech.value = project.tech.join(", ");
      form.elements.status.value = project.status;
      form.elements.updatedAt.value = project.updatedAt;
      form.elements.versionLabel.value = project.versionLabel || "";
      form.elements.versionNotes.value = project.versionNotes || "";
      form.elements.appDownloadUrl.value = project.appDownloadUrl || "";
      form.elements.screenshots.value = (project.screenshots || []).join(", ");
      renderScreenshotsUrlChecks().catch(() => null);
      form.elements.policyText.value = project.policyText || "";
      state.uploadedAppUrl = project.appDownloadUrl || "";
      state.uploadedAppFileName = project.appFileName || "";
      if (imageFileInput) {
        imageFileInput.value = "";
      }
      if (appFileInput) {
        appFileInput.value = "";
      }
      if (screenshotsFileInput) {
        screenshotsFileInput.value = "";
      }
      if (screenshotsPreview) {
        screenshotsPreview.innerHTML = "";
        (project.screenshots || []).slice(0, SCREENSHOTS_MAX_COUNT).forEach((url) => {
          const img = document.createElement("img");
          img.src = url;
          img.alt = `Скріншот ${project.title}`;
          screenshotsPreview.appendChild(img);
        });
      }
      if (editingBanner) {
        editingBanner.removeAttribute("hidden");
      }
      if (editingTitle) {
        editingTitle.textContent = `${project.title} (${project.id})`;
      }
      updatePreview(project.image);
      renderList();
      setStatus(`Редагування проекту: ${project.title}`);
    };

    const clearEditMode = () => {
      state.editingId = "";
      if (editingBanner) {
        editingBanner.setAttribute("hidden", "true");
      }
      if (editingTitle) {
        editingTitle.textContent = "";
      }
      renderList();
    };

    list.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) {
        return;
      }

      const editId = target.getAttribute("data-edit");
      const deleteId = target.getAttribute("data-delete");
      const projects = readProjects();

      if (editId) {
        const project = projects.find((item) => item.id === editId);
        if (project) {
          fillForm(project);
        }
      }

      if (deleteId) {
        const project = projects.find((item) => item.id === deleteId);
        if (!project) {
          return;
        }

        const confirmed = window.confirm(`Видалити проект \"${project.title}\"? Цю дію потрібно підтвердити.`);
        if (!confirmed) {
          return;
        }

        const next = projects.filter((item) => item.id !== deleteId);
        const updatedProjects = saveProjects(next);
        const cloudResult = await saveProjectsToCloud(updatedProjects);
        const ghResult = await syncProjectsToGitHubAndReport(updatedProjects, `delete project ${project.id}`);
        if (state.editingId === deleteId) {
          clearEditMode();
        }
        renderList();
        if (!ghResult.ok) {
          setStatus(`Проект видалено, але GitHub sync не вдався: ${ghResult.error}`, true);
        } else if (cloudResult.ok) {
          const suffix = ghResult.skipped ? "" : " GitHub оновлено.";
          setStatus(`Проект видалено: ${project.title}.${suffix}`);
        } else {
          const ghSuffix = ghResult.skipped ? "" : " GitHub оновлено.";
          setStatus(`Проект видалено локально: ${project.title}. Cloud sync: ${cloudResult.reason}.${ghSuffix}`, true);
        }
      }
    });

    cancelEditBtn?.addEventListener("click", () => {
      form.reset();
      richEditors.forEach((name) => setRichFieldValue(name, ""));
      resetFormState();
      clearEditMode();
      setStatus("Режим редагування скасовано. Можна створити новий проект.");
    });

    imageFileInput?.addEventListener("change", async () => {
      const file = imageFileInput.files?.[0];
      if (!file) {
        state.uploadedImageDataUrl = "";
        updatePreview("");
        return;
      }

      try {
        const result = await validateImageFile(file);
        if (!result.ok) {
          state.uploadedImageDataUrl = "";
          imageFileInput.value = "";
          updatePreview("");
          setStatus(result.error, true);
          return;
        }

        state.uploadedImageDataUrl = result.dataUrl || "";
        updatePreview(state.uploadedImageDataUrl);
        setStatus(
          `Зображення готове: ${result.width}x${result.height}, ${formatBytes(result.size || 0)}. Використаю його при збереженні.`
        );
      } catch {
        state.uploadedImageDataUrl = "";
        imageFileInput.value = "";
        updatePreview("");
        setStatus("Не вдалося обробити зображення. Спробуй інший файл.", true);
      }
    });

    appFileInput?.addEventListener("change", () => {
      const file = appFileInput.files?.[0];
      if (!file) {
        if (appHint) {
          appHint.textContent =
            "Підтримуються .apk або .xapk. Після вибору файл завантажиться у Firebase Storage під час збереження проекту.";
        }
        return;
      }

      const validation = validateAppPackageFile(file);
      if (!validation.ok) {
        if (appHint) {
          appHint.textContent = validation.error;
        }
        appFileInput.value = "";
        return;
      }

      if (appHint) {
        appHint.textContent = `Файл готовий до завантаження: ${file.name} (${formatBytes(file.size)}).`;
      }
    });

    screenshotsFileInput?.addEventListener("change", () => {
      const files = Array.from(screenshotsFileInput.files || []);
      if (screenshotsPreview) {
        screenshotsPreview.innerHTML = "";
      }

      if (files.length === 0) {
        if (screenshotsHint) {
          screenshotsHint.textContent = "До 8 скріншотів. Рекомендовано портретні зображення 9:16.";
        }
        return;
      }

      if (files.length > SCREENSHOTS_MAX_COUNT) {
        if (screenshotsHint) {
          screenshotsHint.textContent = `Можна вибрати максимум ${SCREENSHOTS_MAX_COUNT} скріншотів.`;
        }
        screenshotsFileInput.value = "";
        return;
      }

      for (const file of files) {
        const validation = validateScreenshotFile(file);
        if (!validation.ok) {
          if (screenshotsHint) {
            screenshotsHint.textContent = validation.error;
          }
          screenshotsFileInput.value = "";
          if (screenshotsPreview) {
            screenshotsPreview.innerHTML = "";
          }
          return;
        }
      }

      if (screenshotsHint) {
        screenshotsHint.textContent = `Скріншоти готові до завантаження: ${files.length} шт.`;
      }

      if (screenshotsPreview) {
        files.forEach((file) => {
          const img = document.createElement("img");
          img.src = URL.createObjectURL(file);
          img.alt = "Прев'ю скріншоту";
          screenshotsPreview.appendChild(img);
        });
      }
    });

    screenshotsInput?.addEventListener("input", scheduleScreenshotsUrlChecks);
    screenshotsInput?.addEventListener("blur", () => {
      renderScreenshotsUrlChecks().catch(() => null);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      richEditors.forEach((name) => syncRichField(name));

      const rawId = state.editingId || form.elements.id.value || form.elements.title.value;
      const id = slugify(rawId);
      if (!id) {
        setStatus("Вкажи ID або назву проекту.", true);
        return;
      }

      const projects = readProjects();
      const existing = projects.find((item) => item.id === id);
      const imageFromForm = String(form.elements.image.value || "").trim();
      const image = state.uploadedImageDataUrl || imageFromForm || existing?.image || "assets/projects/calorie-ai.svg";
      const appFile = appFileInput?.files?.[0] || null;
      const screenshotFiles = Array.from(screenshotsFileInput?.files || []);
      let appDownloadUrl = String(form.elements.appDownloadUrl?.value || "").trim() || existing?.appDownloadUrl || "";
      let appFileName = existing?.appFileName || "";
      let screenshots = toUrlArray(form.elements.screenshots?.value || "");

      if (screenshotFiles.length > 0) {
        if (screenshotFiles.length > SCREENSHOTS_MAX_COUNT) {
          setStatus(`Можна завантажити максимум ${SCREENSHOTS_MAX_COUNT} скріншотів.`, true);
          return;
        }

        for (const file of screenshotFiles) {
          const validation = validateScreenshotFile(file);
          if (!validation.ok) {
            setStatus(validation.error, true);
            return;
          }
        }

        setStatus(`Завантажую скріншоти (${screenshotFiles.length} шт.) у Firebase Storage...`);
        const uploadScreens = await uploadScreenshotFilesToCloud(screenshotFiles, id);
        if (!uploadScreens.ok) {
          setStatus(`Не вдалося завантажити скріншоти: ${uploadScreens.reason}`, true);
          return;
        }

        screenshots = [...screenshots, ...(uploadScreens.urls || [])].slice(0, SCREENSHOTS_MAX_COUNT);
      } else if (screenshots.length === 0 && Array.isArray(existing?.screenshots)) {
        screenshots = existing.screenshots;
      }

      if (appFile) {
        const validation = validateAppPackageFile(appFile);
        if (!validation.ok) {
          setStatus(validation.error, true);
          return;
        }

        setStatus(`Завантажую APK у Firebase Storage: ${appFile.name}...`);
        const uploaded = await uploadAppPackageToCloud(appFile, id);
        if (!uploaded.ok) {
          setStatus(`Не вдалося завантажити APK: ${uploaded.reason}`, true);
          return;
        }

        appDownloadUrl = uploaded.url || "";
        appFileName = uploaded.fileName || appFile.name;
        state.uploadedAppUrl = appDownloadUrl;
        state.uploadedAppFileName = appFileName;
      }

      const payload = normalizeProject({
        id,
        title: form.elements.title.value,
        summary: form.elements.summary.value,
        purpose: form.elements.purpose.value,
        image,
        tech: form.elements.tech.value,
        status: form.elements.status.value,
        updatedAt: form.elements.updatedAt.value,
        versionLabel: form.elements.versionLabel.value,
        versionNotes: form.elements.versionNotes.value,
        appDownloadUrl,
        appFileName,
        screenshots,
        policyText: form.elements.policyText.value
      });

      if (!payload.policyText) {
        setStatus("Заповни текст політики для цього проекту.", true);
        return;
      }

      const existingIndex = projects.findIndex((item) => item.id === payload.id);
      if (existingIndex >= 0) {
        projects[existingIndex] = payload;
      } else {
        projects.push(payload);
      }

      const updatedProjects = saveProjects(projects);
      const cloudResult = await saveProjectsToCloud(updatedProjects);
      const ghResult = await syncProjectsToGitHubAndReport(updatedProjects, `upsert project ${payload.id}`);
      renderList();
      if (!ghResult.ok) {
        setStatus(`Проект збережено, але GitHub sync не вдався: ${ghResult.error}`, true);
      } else if (cloudResult.ok) {
        const suffix = ghResult.skipped ? "" : ` GitHub файл оновлено (${ghResult.path}).`;
        setStatus(`Збережено проект: ${payload.title}. Політика створена за адресою ${payload.privacyUrl}.${suffix}`);
      } else {
        const ghSuffix = ghResult.skipped ? "" : " GitHub оновлено.";
        setStatus(
          `Проект збережено локально: ${payload.title}. Політика: ${payload.privacyUrl}. Cloud sync: ${cloudResult.reason}.${ghSuffix}`,
          true
        );
      }
      form.reset();
      richEditors.forEach((name) => setRichFieldValue(name, ""));
      resetFormState();
      clearEditMode();
    });

    resetBtn?.addEventListener("click", async () => {
      const confirmed = window.confirm("Скинути всі проекти до стандартного набору?");
      if (!confirmed) {
        return;
      }
      const updatedProjects = saveProjects(DEFAULT_PROJECTS);
      const cloudResult = await saveProjectsToCloud(updatedProjects);
      const ghResult = await syncProjectsToGitHubAndReport(updatedProjects, "reset to defaults");
      renderList();
      form.reset();
      richEditors.forEach((name) => setRichFieldValue(name, ""));
      resetFormState();
      clearEditMode();
      if (!ghResult.ok) {
        setStatus(`Список скинуто, але GitHub sync не вдався: ${ghResult.error}`, true);
      } else if (cloudResult.ok) {
        const suffix = ghResult.skipped ? "" : " GitHub оновлено.";
        setStatus(`Список проектів скинуто до стандартного шаблону.${suffix}`);
      } else {
        const ghSuffix = ghResult.skipped ? "" : " GitHub оновлено.";
        setStatus(`Список скинуто локально. Cloud sync: ${cloudResult.reason}.${ghSuffix}`, true);
      }
    });

    exportBtn?.addEventListener("click", exportProjectsJson);

    importBtn?.addEventListener("click", () => {
      importFileInput?.click();
    });

    importFileInput?.addEventListener("change", async () => {
      const file = importFileInput.files?.[0];
      await importProjectsJson(file);
      importFileInput.value = "";
    });

    renderList();
    resetFormState();
  };

  syncProjectsFromCloud()
    .catch(() => null)
    .finally(() => {
      initLanguageSwitcher();
      applyStaticTranslations();
      initDrum();
      initProjectPage();
      initProjectTopbarSelect();
      initPrivacyIndex();
      initPolicyPage();
      initFeedbackPage();
      initAdminLoginPage();
      initAdminPage();
    });
})();
