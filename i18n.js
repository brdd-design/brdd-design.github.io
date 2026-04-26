const translations = {
  en: {
    "nav.manifesto": "Manifesto",
    "nav.ecosystem": "Ecosystem",
    "nav.articles": "Articles",
    "hero.title": "Business Rule Driven <span class='gradient-text'>Design</span>",
    "hero.subtitle": "An architectural pattern focused on making business rules the absolute protagonists of software development.",
    "hero.btn.ecosystem": "Explore Ecosystem",
    "hero.btn.story": "Read the Story",
    "manifesto.title": "Bridging the Gap Between Business and IT",
    "manifesto.desc": "BRDD architecture was born from the need to standardize actions often mixed in legacy services.",
    "manifesto.val.title": "Rule Validation (R)",
    "manifesto.val.desc": "The ValidationService ensures business rules are met before main execution.",
    "manifesto.use.title": "Use Cases (US)",
    "manifesto.use.desc": "The UseCase orchestrates main logic, keeping centralized control free from infrastructure coupling.",
    "manifesto.eff.title": "Side Effects (CE)",
    "manifesto.eff.desc": "We document interactions with external systems (e-mails, messaging) as Side Effects reported by the Context.",
    "manifesto.ctx.title": "Execution Context",
    "manifesto.ctx.desc": "The ExecutionContext acts as the single source of truth, logging errors, setters, and effects.",
    "articles.title": "Knowledge Hub: Articles & Guides",
    "articles.desc": "Deep dive into BRDD concepts, origin stories, and practical implementations.",
    "articles.story.title": "BRDD: The Journey",
    "articles.story.desc": "How comparing different realities and legacy systems led to the creation of the Business Rule Driven Design pattern.",
    "articles.story.btn": "Read Article",
    "articles.example.title": "BRDD in Practice",
    "articles.example.desc": "A practical implementation example of BRDD in a real-world inventory management scenario.",
    "articles.example.btn": "Read Example",
    "ecosystem.title": "Repository Hub (Native Libraries)",
    "ecosystem.desc": "The BRDD core ported to the 6 most used languages in the market. Ready for enterprise adoption.",
    "ecosystem.todo": "TODO: Coming Soon",
    "ecosystem.view": "View Repository",
    "manifesto.full.title": "The BRDD Manifesto",
    "manifesto.full.subtitle": "Business Rule Driven Design (BRDD) is an architectural pattern that prioritizes business rules as the primary drivers of software structure.",
    "manifesto.pillars.title": "The Pillars of BRDD",
    "manifesto.pillar1.title": "1. Unique Rule Coding",
    "manifesto.pillar1.desc": "Every validation or side effect must have a unique ID (e.g., PROD_001). This ID connects the code directly to the Business Context.",
    "manifesto.pillar2.title": "2. Execution Context Narrative",
    "manifesto.pillar2.desc": "Use Cases return an ExecutionContext instead of raw data. It contains data, setters, effects, and validation reports.",
    "manifesto.pillar3.title": "3. Service Specialization",
    "manifesto.pillar3.desc": "UseCase orchestrates, ValidateService verifies, EnrichService completes data, Client/Listener bridges external domains.",
    "manifesto.pillar4.title": "4. Unified Response Pattern",
    "manifesto.pillar4.desc": "All API interactions follow a strictly standardized JSON format: data, message, status, errors, setters, and effects.",
    "footer.maintained": "Officially maintained by <strong>Defol Tech</strong>.",
    "footer.contact": "Contact",
    "footer.company": "Company",
    "article.back": "← Back to Home",
    "article.view_md": "View original Markdown on GitHub (TODO)"
  },
  pt: {
    "nav.manifesto": "Manifesto",
    "nav.ecosystem": "Ecossistema",
    "nav.articles": "Artigos",
    "hero.title": "Business Rule Driven <span class='gradient-text'>Design</span>",
    "hero.subtitle": "Um padrão arquitetural focado em tornar as regras de negócio as protagonistas absolutas do desenvolvimento de software.",
    "hero.btn.ecosystem": "Explorar o Ecossistema",
    "hero.btn.story": "Ler a História",
    "manifesto.title": "Removendo o Gap entre Negócios e TI",
    "manifesto.desc": "A arquitetura BRDD nasce da necessidade de padronizar ações misturadas em serviços legados.",
    "manifesto.val.title": "Validação de Regras (R)",
    "manifesto.val.desc": "O ValidationService garante que as regras negociais sejam cumpridas antes da execução principal.",
    "manifesto.use.title": "Casos de Uso (US)",
    "manifesto.use.desc": "O UseCase orquestra a lógica principal, mantendo o controle centralizado e livre de acoplamento com a infraestrutura.",
    "manifesto.eff.title": "Efeitos Colaterais (CE)",
    "manifesto.eff.desc": "Documentamos interações com sistemas externos (disparos de e-mail, mensageria) como Efeitos Colaterais reportados pelo Contexto.",
    "manifesto.ctx.title": "Contexto de Execução",
    "manifesto.ctx.desc": "O ExecutionContext age como a fonte de verdade, registrando erros, setters e effects.",
    "articles.title": "Hub de Conhecimento: Artigos e Guias",
    "articles.desc": "Aprofunde-se nos conceitos do BRDD, histórias de origem e implementações práticas.",
    "articles.story.title": "BRDD: A Jornada",
    "articles.story.desc": "Como a comparação entre diferentes realidades e sistemas legados levou à criação do padrão Business Rule Driven Design.",
    "articles.story.btn": "Ler Artigo",
    "articles.example.title": "BRDD na Prática",
    "articles.example.desc": "Um exemplo prático de implementação do BRDD em um cenário real de gerenciamento de estoque.",
    "articles.example.btn": "Ler Exemplo",
    "ecosystem.title": "Hub de Repositórios (Bibliotecas Nativas)",
    "ecosystem.desc": "O core do BRDD foi portado para as 6 linguagens mais utilizadas pelo mercado. Pronto para adoção corporativa.",
    "ecosystem.todo": "TODO: Em breve",
    "ecosystem.view": "Ver Repositório",
    "manifesto.full.title": "O Manifesto BRDD",
    "manifesto.full.subtitle": "Business Rule Driven Design (BRDD) é um padrão arquitetural que prioriza as regras de negócio como as principais condutoras da estrutura do software.",
    "manifesto.pillars.title": "Os Pilares do BRDD",
    "manifesto.pillar1.title": "1. Codificação Única de Regras",
    "manifesto.pillar1.desc": "Toda validação ou efeito colateral deve ter um ID único (ex: PROD_001). Este ID conecta o código diretamente ao Contexto de Negócios.",
    "manifesto.pillar2.title": "2. Narrativa do Contexto de Execução",
    "manifesto.pillar2.desc": "Casos de Uso retornam um ExecutionContext em vez de dados brutos. Ele contém dados, setters, effects e relatórios de validação.",
    "manifesto.pillar3.title": "3. Especialização de Serviços",
    "manifesto.pillar3.desc": "UseCase orquestra, ValidateService verifica, EnrichService completa dados, Client/Listener faz a ponte com domínios externos.",
    "manifesto.pillar4.title": "4. Padrão de Resposta Unificado",
    "manifesto.pillar4.desc": "Todas as interações de API seguem um formato JSON estritamente padronizado: data, message, status, errors, setters e effects.",
    "ecosystem.todo": "TODO: Em breve",
    "footer.maintained": "Mantido oficialmente pela <strong>Defol Tech</strong>.",
    "footer.contact": "Contato",
    "footer.company": "Empresa",
    "article.back": "← Voltar para o Início",
    "article.view_md": "Ver Markdown original no GitHub (TODO)"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    const savedLang = localStorage.getItem('brdd-lang');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) {
      return 'pt';
    }
    return 'en';
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('brdd-lang', lang);
      this.updateDOM();
      
      // Update select value if exists
      const langSelector = document.getElementById('lang-selector');
      if (langSelector) {
        langSelector.value = lang;
      }
    }
  }

  updateDOM() {
    // Update simple texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[this.currentLang][key]) {
        el.innerHTML = translations[this.currentLang][key];
      }
    });
    
    // Toggle language-specific blocks (for long articles)
    const blocks = document.querySelectorAll('[data-lang-block]');
    blocks.forEach(block => {
      if (block.getAttribute('data-lang-block') === this.currentLang) {
        block.style.display = 'block';
      } else {
        block.style.display = 'none';
      }
    });

    document.documentElement.lang = this.currentLang;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateDOM();
      
      const langSelector = document.getElementById('lang-selector');
      if (langSelector) {
        langSelector.value = this.currentLang;
        langSelector.addEventListener('change', (e) => {
          this.setLanguage(e.target.value);
        });
      }
    });
  }
}

// Initialize globally
window.i18n = new I18nManager();
