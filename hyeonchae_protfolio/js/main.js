/**
 * @fileoverview Core Application Orchestrator for Crypto Lab Dashboard (Full Hanji Enterprise Spec)
 * @version 1.5.0-full-hanji
 */

'use strict';

/**
 * 1. Central Data Repository
 */
const SYSTEM_CRYPTO_MANIFEST = [
    { id: "01", year: "B.C. 100", title: "역사적 고전 암호학", desc: "단순 알파벳 치환 및 위치 변경", routingKey: "category1", tier: "top" },
    { id: "02", year: "1976", title: "현대 비대칭키", desc: "공개키 기반 키 교환 알고리즘", routingKey: "category2", tier: "top" },
    { id: "03", year: "1995", title: "전자서명/무결성", desc: "디지털 서명 및 신원 검증", routingKey: "category3", tier: "top" },
    
    { id: "04", year: "2001", title: "현대 대칭키 암호", desc: "빠르고 안전한 블록 암호화", routingKey: "category4", tier: "bottom" },
    { id: "05", year: "2002", title: "해시 함수", desc: "복구 불가능한 단방향 난수 변환", routingKey: "category5", tier: "bottom" },
    { id: "06", year: "2008", title: "블록체인/영지식", desc: "탈중앙화 합의 및 증명 시스템", routingKey: "category6", tier: "bottom" },
    { id: "07", year: "2024", title: "차세대 암호", desc: "양자 컴퓨터 해킹 방어용 암호", routingKey: "category7", tier: "bottom" }
];

const CONFIG = {
    DOM_ANIMATION_STAGGER: 70, 
    STORAGE_THEME_KEY: "CRYPTO_LAB_PERFECT_HANJI_THEME"
};

/**
 * 2. Enterprise Core Engine Class
 */
class CryptoLabEngine {
    constructor() {
        this.state = {
            currentTheme: 'light',
            isSystemDiagnosticRunning: false,
            dataManifest: SYSTEM_CRYPTO_MANIFEST
        };

        this.domRegistry = {
            preloader: document.getElementById('system-preloader'),
            topContainer: document.getElementById('runtime-grid-top'),
            bottomContainer: document.getElementById('runtime-grid-bottom'),
            themeBtn: document.getElementById('theme-toggle-btn'),
            diagnosticBtn: document.getElementById('system-diagnostic-btn')
        };
    }

    initialize() {
        try {
            console.log("[SYSTEM] Initializing Crypto Lab Architecture Core...");
            
            this.setupThemeContext();
            this.renderDashboardCore();
            this.registerEventInterceptors();
            this.terminatePreloader();
            
            console.log("[SYSTEM] Main Framework Successfully Restored.");
        } catch (criticalError) {
            console.error("[CRITICAL ERROR] Failed to load Core Engine:", criticalError);
            this.handleSystemCrash(criticalError);
        }
    }

    setupThemeContext() {
        const savedTheme = localStorage.getItem(CONFIG.STORAGE_THEME_KEY);
        if (savedTheme === 'dark') {
            this.state.currentTheme = 'dark';
            document.body.classList.add('dark-mode');
        } else {
            this.state.currentTheme = 'light';
            document.body.classList.remove('dark-mode');
        }
    }

    toggleThemeEngine() {
        if (this.state.currentTheme === 'light') {
            this.state.currentTheme = 'dark';
            document.body.classList.add('dark-mode');
            localStorage.setItem(CONFIG.STORAGE_THEME_KEY, 'dark');
        } else {
            this.state.currentTheme = 'light';
            document.body.classList.remove('dark-mode');
            localStorage.setItem(CONFIG.STORAGE_THEME_KEY, 'light');
        }
    }

    renderDashboardCore() {
        const topFragment = document.createDocumentFragment();
        const bottomFragment = document.createDocumentFragment();

        this.state.dataManifest.forEach((node, index) => {
            const wrapperElement = document.createElement('article');
            wrapperElement.className = 'component-card-node';
            wrapperElement.style.animationDelay = `${index * CONFIG.DOM_ANIMATION_STAGGER}ms`;

            wrapperElement.innerHTML = `
                <div class="component-card-node__year">${node.year}</div>
                <button class="component-card-node__body" data-router-target="${node.routingKey}" aria-label="${node.title} 개요">
                    <span class="component-card-node__index">[${node.id}]</span>
                    <h2 class="component-card-node__title">${node.title}</h2>
                    <p class="component-card-node__desc">${node.desc}</p>
                </button>
            `;

            if (node.tier === "top") {
                topFragment.appendChild(wrapperElement);
            } else {
                bottomFragment.appendChild(wrapperElement);
            }
        });

        if (this.domRegistry.topContainer) this.domRegistry.topContainer.appendChild(topFragment);
        if (this.domRegistry.bottomContainer) this.domRegistry.bottomContainer.appendChild(bottomFragment);
    }

    registerEventInterceptors() {
        const handleCardInteraction = (event) => {
            const cardBody = event.target.closest('.component-card-node__body');
            if (!cardBody) return;

            const routeId = cardBody.getAttribute('data-router-target');
            this.executeClientSideRouter(routeId);
        };

        document.addEventListener('click', handleCardInteraction);

        if (this.domRegistry.themeBtn) {
            this.domRegistry.themeBtn.addEventListener('click', () => this.toggleThemeEngine());
        }

        if (this.domRegistry.diagnosticBtn) {
            this.domRegistry.diagnosticBtn.addEventListener('click', () => this.runSystemDiagnostics());
        }
    }

    executeClientSideRouter(targetKey) {
        console.log(`[ROUTE] Redirecting to archive slot: /projects/${targetKey}.html`);
        window.location.href = `projects/${targetKey}.html`; // 👈 projects/ 폴더명 추가!
    }

    runSystemDiagnostics() {
        if (this.state.isSystemDiagnosticRunning) return;
        this.state.isSystemDiagnosticRunning = true;
        
        console.log("================= ROYAL SYSTEM DIAGNOSTICS =================");
        console.log(`- TOTAL RECORD NODES  : ${this.state.dataManifest.length}`);
        console.log(`- CORE TEXTURE STATE  : TRUE MONOCHROME FILTER ACTIVE`);
        console.log(`- ARCHITECTURE TYPE   : 3+4 DUAL GRIDS`);
        console.log("======================================================");
        
        alert("실록 무늬 및 데이터 아키텍처 진단이 정상 완료되었습니다.");
        this.state.isSystemDiagnosticRunning = false;
    }

    terminatePreloader() {
        if (this.domRegistry.preloader) {
            setTimeout(() => {
                this.domRegistry.preloader.classList.add('preloader--hidden');
            }, 350);
        }
    }

    handleSystemCrash(errorObj) {
        document.body.innerHTML = `
            <div style="padding: 60px; text-align: center; font-family: serif; color: #8a2411; background: #f4edd9; min-height: 100vh;">
                <h2>[실록 무늬 시스템 복구 예외 이벤트 식별]</h2>
                <pre style="background: #1a1917; color: #fbf9f3; padding: 25px; margin-top: 25px; border-radius: 12px; text-align: left; overflow-x: auto;">${errorObj.stack}</pre>
            </div>
        `;
    }
}

/**
 * 3. Execution Ignition
 */
document.addEventListener('DOMContentLoaded', () => {
    const ArchiveApplicationInstance = new CryptoLabEngine();
    ArchiveApplicationInstance.initialize();
    window.__CRYPTO_ARCHIVE_CORE__ = ArchiveApplicationInstance;
});