const STORAGE_KEYS = {
  user: 'beyondMe_user',
  avatar: 'beyondMe_avatar',
  memories: 'beyondMe_memories',
  simulations: 'beyondMe_simulations',
  stats: 'beyondMe_stats',
  settings: 'beyondMe_settings',
  messages: 'beyondMe_messages',
  premium: 'beyondMe_premium'
};

const defaultStats = { xp: 0, level: 1, interactions: 0 };
const defaultSettings = { language: 'en', theme: 'dark', ambientOn: false };
const demoEchoUsers = [
  { name: 'Lyra', status: 'Exploring Memory World', emoji: '✨' },
  { name: 'Omar', status: 'Reflecting on a future branch', emoji: '🪐' },
  { name: 'Aya', status: 'Building an EchoVerse room', emoji: '🌙' },
  { name: 'Noah', status: 'Syncing with AI companion', emoji: '🧠' }
];

const translations = {
  en: {
    tagline: 'Travel Through Your Past, Present & Possible Futures',
    heroTitle: 'Travel Through Your Past, Present & Possible Futures',
    heroDesc: 'A Black Mirror-inspired emotional metaverse where your memories, choices, and imagined futures become interactive worlds.',
    enterJourney: 'Enter Your Journey',
    piLogin: 'Pi Login Only',
    connectWallet: 'Connect Pi Wallet',
    piAuthentication: 'Pi Authentication',
    authDesc: 'This prototype uses Pi Browser authentication only. No email or password required.',
    loginPi: 'Login with Pi',
    username: 'Username',
    welcome: 'Welcome',
    growthDashboard: 'Personal Growth Dashboard',
    xpPoints: 'XP Points',
    level: 'Level',
    memories: 'Memories',
    simulations: 'Simulations',
    aiInsights: 'AI Insights',
    avatarSystem: 'AI Avatar System',
    avatarName: 'Avatar Name',
    personalityType: 'Personality Type',
    createAvatar: 'Create Avatar',
    premiumAccess: 'Pi Premium Access',
    premiumDesc: 'Unlock deep AI insights, advanced simulations, and private EchoVerse rooms.',
    premiumFeature1: 'Advanced future branching',
    premiumFeature2: 'Emotional pattern analysis',
    premiumFeature3: 'Shared EchoVerse rooms',
    unlockPremium: 'Unlock with Pi',
    paymentNote: 'Frontend callbacks are wired. Backend approval/completion endpoints must be added for production.',
    memoryWorlds: 'Memory Worlds',
    memoryDesc: 'Capture meaningful moments and revisit them through immersive memory cards.',
    memoryTitle: 'Memory Title',
    memoryDescription: 'Memory Description',
    addMemory: 'Add Memory',
    ambientSound: 'Ambient Sound',
    parallelPaths: 'Parallel Paths',
    career: 'Career',
    country: 'Country',
    relationshipChoice: 'Relationship Choice',
    simulateFuture: 'Simulate Future',
    outcomeCard: 'Outcome Card',
    futureAwaits: 'Your future branches are waiting...',
    futureAwaitsDesc: 'Run a simulation to see an emotional, social, and life-path projection.',
    timelineDesc: 'Scroll across the nodes of your memories, current identity, and future simulations.',
    echoVerse: 'EchoVerse اجتماعي',
    activeTravelers: 'Active Travelers',
    sharedChannel: 'Shared Channel',
    send: 'Send'
  },
  fr: {
    tagline: 'Voyagez à travers votre passé, présent et futurs possibles',
    heroTitle: 'Voyagez à travers votre passé, présent et futurs possibles',
    heroDesc: 'Un métavers émotionnel inspiré de Black Mirror où vos souvenirs, choix et futurs imaginés deviennent des mondes interactifs.',
    enterJourney: 'Entrer dans votre voyage',
    piLogin: 'Connexion Pi uniquement',
    connectWallet: 'Connecter le wallet Pi',
    piAuthentication: 'Authentification Pi',
    authDesc: 'Ce prototype utilise uniquement l’authentification Pi Browser. Aucun email ni mot de passe.',
    loginPi: 'Se connecter avec Pi',
    username: 'Nom d’utilisateur',
    welcome: 'Bienvenue',
    growthDashboard: 'Tableau de croissance personnelle',
    xpPoints: 'Points XP',
    level: 'Niveau',
    memories: 'Souvenirs',
    simulations: 'Simulations',
    aiInsights: 'Analyses IA',
    avatarSystem: 'Système d’avatar IA',
    avatarName: 'Nom de l’avatar',
    personalityType: 'Type de personnalité',
    createAvatar: 'Créer l’avatar',
    premiumAccess: 'Accès Premium Pi',
    premiumDesc: 'Débloquez des analyses IA avancées, des simulations profondes et des salons EchoVerse privés.',
    premiumFeature1: 'Branchement futur avancé',
    premiumFeature2: 'Analyse des schémas émotionnels',
    premiumFeature3: 'Salles EchoVerse partagées',
    unlockPremium: 'Débloquer avec Pi',
    paymentNote: 'Les callbacks frontend sont prêts. Des endpoints backend sont nécessaires en production.',
    memoryWorlds: 'Mondes mémoire',
    memoryDesc: 'Capturez des moments importants et revisitez-les via des cartes immersives.',
    memoryTitle: 'Titre du souvenir',
    memoryDescription: 'Description du souvenir',
    addMemory: 'Ajouter un souvenir',
    ambientSound: 'Son ambiant',
    parallelPaths: 'Chemins parallèles',
    career: 'Carrière',
    country: 'Pays',
    relationshipChoice: 'Choix relationnel',
    simulateFuture: 'Simuler le futur',
    outcomeCard: 'Carte de résultat',
    futureAwaits: 'Vos branches futures vous attendent...',
    futureAwaitsDesc: 'Lancez une simulation pour voir une projection émotionnelle, sociale et de vie.',
    timelineDesc: 'Faites défiler les nœuds de vos souvenirs, de votre identité actuelle et des simulations futures.',
    echoVerse: 'EchoVerse social',
    activeTravelers: 'Voyageurs actifs',
    sharedChannel: 'Canal partagé',
    send: 'Envoyer'
  },
  ar: {
    tagline: 'سافر عبر ماضيك وحاضرك ومستقبلك المحتمل',
    heroTitle: 'سافر عبر ماضيك وحاضرك ومستقبلك المحتمل',
    heroDesc: 'عالم عاطفي مستقبلي مستوحى من Black Mirror حيث تتحول ذكرياتك وقراراتك ومستقبلك المتخيَّل إلى عوالم تفاعلية.',
    enterJourney: 'ابدأ رحلتك',
    piLogin: 'تسجيل دخول Pi فقط',
    connectWallet: 'ربط محفظة Pi',
    piAuthentication: 'مصادقة Pi',
    authDesc: 'النموذج ده بيعتمد على تسجيل Pi Browser فقط، بدون إيميل أو كلمة مرور.',
    loginPi: 'سجّل الدخول بـ Pi',
    username: 'اسم المستخدم',
    welcome: 'أهلاً بيك',
    growthDashboard: 'لوحة النمو الشخصي',
    xpPoints: 'نقاط XP',
    level: 'المستوى',
    memories: 'الذكريات',
    simulations: 'المحاكاة',
    aiInsights: 'رؤى الذكاء الاصطناعي',
    avatarSystem: 'نظام الأفاتار الذكي',
    avatarName: 'اسم الأفاتار',
    personalityType: 'نوع الشخصية',
    createAvatar: 'إنشاء الأفاتار',
    premiumAccess: 'وصول Pi المميز',
    premiumDesc: 'افتح رؤى أعمق ومحاكاة متقدمة وغرف EchoVerse خاصة.',
    premiumFeature1: 'تفرعات مستقبلية متقدمة',
    premiumFeature2: 'تحليل الأنماط العاطفية',
    premiumFeature3: 'غرف EchoVerse مشتركة',
    unlockPremium: 'افتح باستخدام Pi',
    paymentNote: 'تم توصيل callbacks في الواجهة. الإنتاج يحتاج endpoints باك إند للموافقة والإكمال.',
    memoryWorlds: 'عوالم الذكريات',
    memoryDesc: 'سجّل اللحظات المهمة وارجع لها من خلال بطاقات غامرة.',
    memoryTitle: 'عنوان الذكرى',
    memoryDescription: 'وصف الذكرى',
    addMemory: 'إضافة ذكرى',
    ambientSound: 'صوت محيطي',
    parallelPaths: 'المسارات الموازية',
    career: 'المسار المهني',
    country: 'الدولة',
    relationshipChoice: 'الاختيار العاطفي',
    simulateFuture: 'محاكاة المستقبل',
    outcomeCard: 'بطاقة النتيجة',
    futureAwaits: 'فروع مستقبلك في انتظارك...',
    futureAwaitsDesc: 'شغّل محاكاة علشان تشوف إسقاط عاطفي واجتماعي ومسار حياة.',
    timelineDesc: 'حرّك عبر عقد ماضيك وحاضرك ومحاكاة مستقبلك.',
    echoVerse: 'EchoVerse اجتماعي',
    activeTravelers: 'المستكشفون النشطون',
    sharedChannel: 'القناة المشتركة',
    send: 'إرسال'
  }
};

const state = {
  user: null,
  avatar: null,
  memories: [],
  simulations: [],
  stats: { ...defaultStats },
  settings: { ...defaultSettings },
  messages: [],
  premium: false,
  ambientContext: null,
  ambientOscillators: [],
  echoUsers: demoEchoUsers,
  piAvailable: typeof window !== 'undefined' && typeof window.Pi !== 'undefined'
};

function initApp() {
  bootstrapPi();
  hydrateState();
  bindUI();
  applySettings();
  seedDefaults();
  renderAll();
  startLoadingSequence();
  startStarfield();
  initReveal();
}

document.addEventListener('DOMContentLoaded', initApp);

function bootstrapPi() {
  if (state.piAvailable) {
    try {
      Pi.init({ version: '2.0', sandbox: true });
    } catch (error) {
      console.warn('Pi init error:', error);
    }
  }
}

function hydrateState() {
  state.user = readStorage(STORAGE_KEYS.user, null);
  state.avatar = readStorage(STORAGE_KEYS.avatar, null);
  state.memories = readStorage(STORAGE_KEYS.memories, []);
  state.simulations = readStorage(STORAGE_KEYS.simulations, []);
  state.stats = readStorage(STORAGE_KEYS.stats, { ...defaultStats });
  state.settings = readStorage(STORAGE_KEYS.settings, { ...defaultSettings });
  state.messages = readStorage(STORAGE_KEYS.messages, []);
  state.premium = readStorage(STORAGE_KEYS.premium, false);
}

function bindUI() {
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('languageSwitcher').addEventListener('change', (e) => setLanguage(e.target.value));
  document.getElementById('chatInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

function seedDefaults() {
  if (!state.memories.length) {
    state.memories = [
      {
        id: generateId('memory'),
        title: 'Childhood Home',
        description: 'Warm walls, summer light, and the feeling that time moved slowly and safely.',
        createdAt: new Date().toISOString()
      },
      {
        id: generateId('memory'),
        title: 'First Love',
        description: 'A quiet electric rush of hope, uncertainty, and a version of yourself opening up.',
        createdAt: new Date().toISOString()
      }
    ];
    saveStorage(STORAGE_KEYS.memories, state.memories);
  }

  if (!state.messages.length) {
    state.messages = [
      { id: generateId('msg'), author: 'Lyra', text: 'I just revisited my brightest memory world. It felt strangely real.', system: false },
      { id: generateId('msg'), author: 'System', text: 'EchoVerse room synced. Emotional resonance stable.', system: true }
    ];
    saveStorage(STORAGE_KEYS.messages, state.messages);
  }
}

function renderAll() {
  renderUser();
  renderAvatarPanel();
  renderMemories();
  renderTimeline();
  renderEchoUsers();
  renderMessages();
  updateDashboard();
  updateInsight();
  applyTranslations();
}

function startLoadingSequence() {
  const loading = document.getElementById('loadingScreen');
  setTimeout(() => loading.classList.add('hidden'), 1500);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function generateId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function enterJourney() {
  awardXP(14);
  scrollToSection('authPanel');
  toast('Journey initiated. Your emotional universe is opening.', 'info');
}

async function authenticatePi() {
  if (!state.piAvailable) {
    const demoUser = {
      username: 'demo_pioneer',
      uid: generateId('uid'),
      accessToken: 'demo-token',
      authSource: 'demo'
    };
    state.user = demoUser;
    saveStorage(STORAGE_KEYS.user, state.user);
    awardXP(25);
    renderUser();
    toast('Pi SDK not detected. Demo Pioneer session activated.', 'info');
    return;
  }

  try {
    const auth = await Pi.authenticate(['username'], onIncompletePaymentFound);
    state.user = {
      username: auth.user?.username || auth.user?.uid || 'Pi User',
      uid: auth.user?.uid || '',
      accessToken: auth.accessToken || '',
      authSource: 'pi'
    };
    saveStorage(STORAGE_KEYS.user, state.user);
    awardXP(30);
    renderUser();
    toast(`Welcome ${state.user.username}. Pi session connected.`, 'success');
  } catch (error) {
    console.error(error);
    toast('Pi authentication cancelled or failed.', 'error');
  }
}

async function connectPiWallet() {
  if (!state.piAvailable) {
    if (!state.user) {
      await authenticatePi();
    }
    state.user = { ...(state.user || {}), walletAddress: 'TESTNET-DEMO-WALLET' };
    saveStorage(STORAGE_KEYS.user, state.user);
    awardXP(12);
    renderUser();
    toast('Demo Pi wallet connected.', 'success');
    return;
  }

  try {
    const auth = await Pi.authenticate(['username', 'wallet_address', 'payments'], onIncompletePaymentFound);
    state.user = {
      username: auth.user?.username || 'Pi User',
      uid: auth.user?.uid || '',
      accessToken: auth.accessToken || '',
      walletAddress: auth.user?.wallet_address || auth.wallet?.address || 'Connected',
      authSource: 'pi'
    };
    saveStorage(STORAGE_KEYS.user, state.user);
    awardXP(15);
    renderUser();
    toast('Pi wallet connected successfully.', 'success');
  } catch (error) {
    console.error(error);
    toast('Wallet connection cancelled or failed.', 'error');
  }
}

function renderUser() {
  const username = state.user?.username || 'Guest Explorer';
  const isConnected = !!state.user;
  document.getElementById('usernameDisplay').textContent = username;
  document.getElementById('welcomeMessage').textContent = isConnected
    ? `Welcome back, ${username}. Your timeline is ready.`
    : 'Step into your reflective universe.';
  document.getElementById('authStatus').textContent = isConnected ? 'Connected' : 'Disconnected';
  document.getElementById('walletBtn').textContent = state.user?.walletAddress ? `Wallet: ${username}` : getTranslation('connectWallet');
}

function createAvatar() {
  const name = document.getElementById('avatarName').value.trim() || 'Nova';
  const personality = document.getElementById('avatarPersonality').value;
  const stage = determineAvatarStage();
  state.avatar = { name, personality, stage, createdAt: new Date().toISOString() };
  saveStorage(STORAGE_KEYS.avatar, state.avatar);
  awardXP(18);
  renderAvatarPanel();
  updateInsight();
  toast('AI avatar created and synced.', 'success');
}

function determineAvatarStage() {
  const totalSignals = state.stats.interactions + state.memories.length + state.simulations.length;
  if (totalSignals >= 12) return 'Awakened';
  if (totalSignals >= 6) return 'Adaptive';
  return 'Dormant';
}

function getAvatarDynamicMessage() {
  const avatar = state.avatar;
  if (!avatar) {
    return 'Your AI companion is waiting to evolve with your choices.';
  }

  const personalityMessages = {
    Explorer: 'I sense curiosity in your path. Your future branches open widest when you choose movement over certainty.',
    Emotional: 'Your timeline glows brightest around intimate and emotionally charged decisions. Feelings are your navigation system.',
    Logical: 'Patterns are emerging. Your strongest outcomes appear when clarity and structure lead the way.',
    Visionary: 'You are drawn to possibility. Your simulations keep reaching for impact beyond the present self.',
    Balanced: 'Your path blends emotion and reason. You stabilize timelines that might otherwise collapse into extremes.'
  };

  if (state.memories.length >= 4 && state.simulations.length >= 2) {
    return `${personalityMessages[avatar.personality]} Your avatar has entered ${avatar.stage} state.`;
  }

  return personalityMessages[avatar.personality] || 'Your avatar is learning from every interaction.';
}

function renderAvatarPanel() {
  const avatar = state.avatar;
  const title = avatar ? `${avatar.name} // ${determineAvatarStage()}` : 'Nova // Dormant';
  document.getElementById('avatarTitle').textContent = title;
  document.getElementById('avatarMessage').textContent = getAvatarDynamicMessage();
}

function addMemory() {
  const titleInput = document.getElementById('memoryTitle');
  const descriptionInput = document.getElementById('memoryDescription');
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title || !description) {
    toast('Please enter a memory title and description.', 'error');
    return;
  }

  state.memories.unshift({
    id: generateId('memory'),
    title,
    description,
    createdAt: new Date().toISOString()
  });
  saveStorage(STORAGE_KEYS.memories, state.memories);
  titleInput.value = '';
  descriptionInput.value = '';
  awardXP(20);
  renderMemories();
  renderTimeline();
  updateDashboard();
  updateInsight();
  playTone(420, 0.15, 'sine');
  toast('Memory added to your universe.', 'success');
}

function renderMemories() {
  const container = document.getElementById('memoryList');
  if (!state.memories.length) {
    container.innerHTML = '<div class="memory-card"><h4>No memories yet</h4><p>Add your first memory world.</p></div>';
    return;
  }

  container.innerHTML = state.memories.map((memory, index) => `
    <article class="memory-card">
      <div>
        <span class="memory-tag">Past Node ${index + 1}</span>
        <h4>${escapeHTML(memory.title)}</h4>
        <p>${escapeHTML(memory.description)}</p>
      </div>
      <div class="memory-actions">
        <small>${formatShortDate(memory.createdAt)}</small>
        <button class="secondary-btn" type="button" onclick="enterMemory('${memory.id}')">Enter Memory</button>
      </div>
    </article>
  `).join('');
}

function enterMemory(memoryId) {
  const memory = state.memories.find((item) => item.id === memoryId);
  if (!memory) return;
  awardXP(10);
  if (state.settings.ambientOn) playAmbientPulse();
  toast(`Entering memory: ${memory.title}`, 'info');
  document.getElementById('simulationResult').innerHTML = `
    <h4>${escapeHTML(memory.title)}</h4>
    <p>${escapeHTML(memory.description)}</p>
    <p><strong>Immersion:</strong> Emotional warmth increased. Visual fragments stabilized.</p>
  `;
}

function simulateFuture() {
  const career = document.getElementById('careerChoice').value;
  const country = document.getElementById('countryChoice').value;
  const relationship = document.getElementById('relationshipChoice').value;

  const emotionalArc = {
    'AI Artist': 'You build emotionally resonant work that attracts a niche global following.',
    'Founder': 'You create systems that amplify your independence, but demand courage and resilience.',
    'Researcher': 'Your future becomes quieter, deeper, and filled with breakthrough understanding.',
    'Healer': 'People begin to trust your presence, turning empathy into meaningful transformation.',
    'Nomad Creator': 'Freedom becomes your operating system, and your life turns into an evolving story-world.'
  };

  const placeArc = {
    France: 'Aesthetic sensitivity and community shape your identity.',
    Egypt: 'Roots, legacy, and spiritual intensity create a grounded but expansive path.',
    Japan: 'Precision, ritual, and reinvention sharpen your focus.',
    Canada: 'Stability, openness, and experimentation coexist in your timeline.',
    Brazil: 'Warmth, spontaneity, and social energy pull your world outward.'
  };

  const relationshipArc = {
    'Stay Independent': 'You protect your autonomy and channel energy into self-authorship.',
    'Build a Partnership': 'A shared future amplifies both healing and accountability.',
    'Reconnect with the Past': 'Old emotions return, but this time you meet them with wiser boundaries.',
    'Choose a Soul Community': 'Belonging expands beyond romance into collective resonance.'
  };

  const outcome = `${emotionalArc[career]} In ${country}, ${placeArc[country]} By choosing to ${relationship.toLowerCase()}, ${relationshipArc[relationship]} Overall, your future self becomes more ${inferTrait(career, relationship)}.`;

  const simulation = {
    id: generateId('sim'),
    career,
    country,
    relationship,
    outcome,
    createdAt: new Date().toISOString()
  };

  state.simulations.unshift(simulation);
  saveStorage(STORAGE_KEYS.simulations, state.simulations);
  awardXP(22);
  document.getElementById('simulationResult').innerHTML = `
    <h4>${escapeHTML(career)} • ${escapeHTML(country)}</h4>
    <p>${escapeHTML(outcome)}</p>
    <p><strong>Probability Aura:</strong> ${randomFrom(['Stable', 'Rising', 'Emotionally Intense', 'Unexpectedly Bright'])}</p>
  `;
  renderTimeline();
  updateDashboard();
  updateInsight();
  playTone(560, 0.18, 'triangle');
  toast('New future simulation generated.', 'success');
}

function inferTrait(career, relationship) {
  if (career === 'Healer' || relationship === 'Build a Partnership') return 'connected';
  if (career === 'Founder' || relationship === 'Stay Independent') return 'self-directed';
  if (career === 'Researcher') return 'perceptive';
  if (career === 'Nomad Creator') return 'free-form';
  return 'imaginative';
}

function renderTimeline() {
  const container = document.getElementById('timelineTrack');
  const nodes = [
    ...state.memories.slice(0, 5).map((memory) => ({
      era: 'Past',
      title: memory.title,
      description: memory.description,
      time: memory.createdAt
    })),
    {
      era: 'Present',
      title: state.avatar ? `${state.avatar.name} Avatar` : 'Current Self',
      description: state.avatar ? `${state.avatar.personality} mode active with ${determineAvatarStage()} state.` : 'Create your avatar to anchor the present node.',
      time: new Date().toISOString()
    },
    ...state.simulations.slice(0, 5).map((sim) => ({
      era: 'Future',
      title: `${sim.career} in ${sim.country}`,
      description: sim.outcome,
      time: sim.createdAt
    }))
  ];

  container.innerHTML = nodes.map((node) => `
    <article class="timeline-node">
      <span class="timeline-era">${node.era}</span>
      <h4>${escapeHTML(node.title)}</h4>
      <p>${escapeHTML(node.description)}</p>
      <small>${formatShortDate(node.time)}</small>
    </article>
  `).join('');
}

function renderEchoUsers() {
  const container = document.getElementById('echoUsers');
  container.innerHTML = state.echoUsers.map((user) => `
    <div class="echo-user inner-glass">
      <div class="echo-avatar">${user.emoji}</div>
      <div>
        <strong>${escapeHTML(user.name)}</strong>
        <span>${escapeHTML(user.status)}</span>
      </div>
    </div>
  `).join('');
}

function renderMessages() {
  const container = document.getElementById('chatFeed');
  container.innerHTML = state.messages.map((msg) => `
    <div class="chat-bubble inner-glass">
      <div class="chat-avatar">${msg.system ? '⚙️' : '💬'}</div>
      <div>
        <strong>${escapeHTML(msg.author)}</strong>
        <p>${escapeHTML(msg.text)}</p>
      </div>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const author = state.user?.username || 'You';
  state.messages.push({ id: generateId('msg'), author, text, system: false });
  input.value = '';
  awardXP(8);
  maybeRespondInEchoVerse(text);
  saveStorage(STORAGE_KEYS.messages, state.messages);
  renderMessages();
}

function maybeRespondInEchoVerse(text) {
  const response = randomFrom([
    'That memory pulse felt strong. Have you mapped it on your ChronoMap yet?',
    'Interesting choice. Your future branch just shifted slightly brighter.',
    'EchoVerse noticed a reflective pattern in your tone.',
    `Your message “${text.slice(0, 22)}...” resonated with 2 nearby explorers.`
  ]);

  setTimeout(() => {
    state.messages.push({ id: generateId('msg'), author: randomFrom(state.echoUsers).name, text: response, system: false });
    saveStorage(STORAGE_KEYS.messages, state.messages);
    renderMessages();
  }, 700);
}

function updateDashboard() {
  const level = Math.max(1, Math.floor(state.stats.xp / 100) + 1);
  state.stats.level = level;
  saveStorage(STORAGE_KEYS.stats, state.stats);

  document.getElementById('xpValue').textContent = state.stats.xp;
  document.getElementById('levelValue').textContent = state.stats.level;
  document.getElementById('memoryCount').textContent = state.memories.length;
  document.getElementById('simulationCount').textContent = state.simulations.length;
}

function updateInsight() {
  const memoryWeight = state.memories.length;
  const futureWeight = state.simulations.length;
  const personality = state.avatar?.personality || 'Balanced';
  let insight = 'You are beginning to map your emotional timeline.';

  if (memoryWeight >= futureWeight + 2) {
    insight = 'You are more anchored in emotional memory than future risk. Reflection is currently your strongest engine.';
  } else if (futureWeight > memoryWeight) {
    insight = 'You are leaning toward possibility and future construction. Your decisions suggest a forward-simulating mindset.';
  }

  if (personality === 'Emotional') {
    insight += ' You tend to choose emotional paths.';
  } else if (personality === 'Logical') {
    insight += ' You optimize for clarity and strategic control.';
  } else if (personality === 'Explorer') {
    insight += ' Curiosity is steering your timeline.';
  } else if (personality === 'Visionary') {
    insight += ' Your patterns point toward high-imagination outcomes.';
  }

  document.getElementById('insightText').textContent = insight;
}

function awardXP(amount) {
  state.stats.xp += amount;
  state.stats.interactions += 1;
  updateDashboard();
}

function toggleTheme() {
  state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
  saveStorage(STORAGE_KEYS.settings, state.settings);
  applySettings();
}

function setLanguage(lang) {
  state.settings.language = lang;
  saveStorage(STORAGE_KEYS.settings, state.settings);
  applySettings();
  applyTranslations();
}

function applySettings() {
  document.body.dataset.theme = state.settings.theme;
  document.body.dataset.lang = state.settings.language;
  document.documentElement.lang = state.settings.language;
  document.documentElement.dir = state.settings.language === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('languageSwitcher').value = state.settings.language;
  document.getElementById('themeToggle').textContent = state.settings.theme === 'dark' ? '☾' : '☀';
  document.getElementById('memoryAmbientStatus').textContent = state.settings.ambientOn ? 'Ambient ON' : 'Ambient OFF';
}

function applyTranslations() {
  const lang = state.settings.language || 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang]?.[key];
    if (text) el.textContent = text;
  });
}

function getTranslation(key) {
  const lang = state.settings.language || 'en';
  return translations[lang]?.[key] || translations.en[key] || key;
}

function toggleAmbientSound() {
  state.settings.ambientOn = !state.settings.ambientOn;
  saveStorage(STORAGE_KEYS.settings, state.settings);
  applySettings();

  if (state.settings.ambientOn) {
    playAmbientPulse();
    toast('Ambient layer activated.', 'success');
  } else {
    stopAmbientPulse();
    toast('Ambient layer muted.', 'info');
  }
}

function getAudioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!state.ambientContext) state.ambientContext = new AudioCtx();
  return state.ambientContext;
}

function playTone(frequency = 440, duration = 0.12, type = 'sine') {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = 0.0001;
  osc.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  gain.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playAmbientPulse() {
  stopAmbientPulse();
  const ctx = getAudioContext();
  if (!ctx) return;
  [174, 261.63].forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = index === 0 ? 'sine' : 'triangle';
    osc.frequency.value = freq;
    gain.gain.value = 0.0001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.linearRampToValueAtTime(0.015, now + 0.2);
    gain.gain.linearRampToValueAtTime(0.0001, now + 2.4);
    osc.start(now);
    osc.stop(now + 2.5);
    state.ambientOscillators.push(osc);
  });
}

function stopAmbientPulse() {
  state.ambientOscillators.forEach((osc) => {
    try { osc.stop(); } catch (_) {}
  });
  state.ambientOscillators = [];
}

function payWithPi() {
  if (!state.user) {
    toast('Please authenticate with Pi first.', 'error');
    scrollToSection('authPanel');
    return;
  }

  if (!state.piAvailable || typeof Pi.createPayment !== 'function') {
    state.premium = true;
    saveStorage(STORAGE_KEYS.premium, true);
    awardXP(40);
    toast('Demo premium unlocked. Pi payment SDK unavailable in this environment.', 'success');
    return;
  }

  const paymentData = {
    amount: 2,
    memo: 'BeyondMe Premium Access',
    metadata: { type: 'premium', app: 'BeyondMe', wallet: 'GAWKO3PRQEIC4WBNJQLINBPE5L4GBE5OC4Q2Y5TE7G67GYXQKUFZTDU6' }
  };

  const callbacks = {
    onReadyForServerApproval: async function (paymentId) {
      toast(`Payment ${paymentId} ready for server approval.`, 'info');
      try {
        await fakeServerStep('/approve', { paymentId });
      } catch (error) {
        console.warn('Server approval placeholder:', error);
      }
    },
    onReadyForServerCompletion: async function (paymentId, txid) {
      toast(`Payment ${paymentId} confirmed on chain. Completing...`, 'info');
      try {
        await fakeServerStep('/complete', { paymentId, txid });
      } catch (error) {
        console.warn('Server completion placeholder:', error);
      }
      state.premium = true;
      saveStorage(STORAGE_KEYS.premium, true);
      awardXP(40);
      toast('Premium unlocked successfully.', 'success');
    },
    onCancel: function (paymentId) {
      toast(`Payment ${paymentId} cancelled.`, 'error');
    },
    onError: function (error) {
      console.error(error);
      toast('Pi payment failed. Check server callbacks or wallet status.', 'error');
    }
  };

  try {
    Pi.createPayment(paymentData, callbacks);
  } catch (error) {
    console.error(error);
    toast('Unable to start Pi payment.', 'error');
  }
}

async function fakeServerStep(path, payload) {
  console.log('Server step placeholder', path, payload);
  return new Promise((resolve) => setTimeout(resolve, 600));
}

function onIncompletePaymentFound(payment) {
  console.warn('Incomplete payment found:', payment);
  toast('Incomplete Pi payment found. Resume on backend to finalize it.', 'info');
}

function toast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const item = document.createElement('div');
  item.className = `toast ${type}`;
  item.textContent = message;
  container.appendChild(item);
  setTimeout(() => item.remove(), 3600);
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatShortDate(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat(state.settings.language === 'ar' ? 'ar-EG' : state.settings.language, {
    month: 'short', day: 'numeric'
  }).format(date);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function startStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = [];

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function createParticles() {
    particles.length = 0;
    const count = Math.min(90, Math.floor(window.innerWidth / 18));
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        glow: Math.random() > 0.6
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = p.glow ? 'rgba(0,240,255,0.85)' : 'rgba(255,255,255,0.7)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

window.connectPiWallet = connectPiWallet;
window.createAvatar = createAvatar;
window.addMemory = addMemory;
window.renderMemories = renderMemories;
window.simulateFuture = simulateFuture;
window.renderTimeline = renderTimeline;
window.payWithPi = payWithPi;
window.authenticatePi = authenticatePi;
window.enterJourney = enterJourney;
window.scrollToSection = scrollToSection;
window.toggleAmbientSound = toggleAmbientSound;
window.sendMessage = sendMessage;
window.enterMemory = enterMemory;