/**
 * @fileoverview Gosaek Core OS - Front-end Architecture Engine
 * @author Cha Hyeon-chae
 * @version 8.0.0
 * @description 1학기 웹 프로그래밍 실습 산출물을 관리하는 객체 지향 렌더링 엔진입니다.
 * [수행평가 완벽 대응] 상대경로, 영문 파일명 규격, 썸네일/제작일 바인딩 모듈 포함.
 */

"use strict";

const GosaekEngine = {
    /**
     * @namespace StateManager
     * @description 애플리케이션의 전역 상태 및 테마를 관리합니다.
     */
    StateManager: {
        state: {
            isUnlocked: false,
            filter: 'ALL',
            searchQuery: '',
            theme: 'dark'
        },
        
        initTheme: function() {
            const btns = document.querySelectorAll('.theme-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetTheme = e.target.getAttribute('data-target');
                    this.state.theme = targetTheme;
                    document.body.setAttribute('data-theme', targetTheme);
                    btns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    GosaekEngine.Logger.push('INFO', `UI 테마 시스템 스왑 완료: [${targetTheme.toUpperCase()}]`);
                });
            });
        }
    },

    /**
     * @namespace Database
     * @description [수행평가 1단계, 4단계 대응] 한글 제외 영문 규격 파일명, 썸네일, 제작일자 메타데이터 구축.
     */
    Database: [
        { month: "MARCH", date: "2026-03-10", file: "0310_1.html", thumb: "thumb_html.jpg", size: "3KB", desc: "HTML 웹 문서 골격 및 헤더 선언문 구성 실습" },
        { month: "MARCH", date: "2026-03-10", file: "0310_2.html", thumb: "thumb_html.jpg", size: "3KB", desc: "인라인 속성과 블록 레벨 돔 구조 상호 배치" },
        { month: "MARCH", date: "2026-03-10", file: "0310_3.html", thumb: "thumb_html.jpg", size: "2KB", desc: "시맨틱 마크업 가독성 지표 향상 가이드" },
        { month: "MARCH", date: "2026-03-17", file: "0317_1.html", thumb: "thumb_css.jpg", size: "3KB", desc: "CSS 스타일시트 기초 선언 및 우선순위 규칙" },
        { month: "MARCH", date: "2026-03-17", file: "0317_2.html", thumb: "thumb_css.jpg", size: "3KB", desc: "텍스트 폰트 제어 및 행간 박스 모델 정렬" },
        { month: "MARCH", date: "2026-03-17", file: "0317_3.html", thumb: "thumb_css.jpg", size: "4KB", desc: "박스 모델 요소 패딩 및 마진 병합 디버깅" },
        { month: "MARCH", date: "2026-03-24", file: "0324_1.html", thumb: "thumb_media.jpg", size: "3KB", desc: "멀티미디어 정적 리소스 로컬 로딩 실습" },
        { month: "MARCH", date: "2026-03-31", file: "0331_1.html", thumb: "thumb_form.jpg", size: "2KB", desc: "웹 폼 데이터 송수신 처리 컨트롤러 기초" },
        
        { month: "APRIL", date: "2026-04-07", file: "0407_1.html", thumb: "thumb_layout.jpg", size: "1KB", desc: "CSS 돔 배치 모델 블록 분기 분할" },
        { month: "APRIL", date: "2026-04-07", file: "0407_2.html", thumb: "thumb_layout.jpg", size: "1KB", desc: "상대 좌표 및 절대 제어 오프셋 포지셔닝" },
        { month: "APRIL", date: "2026-04-07", file: "0407_3.html", thumb: "thumb_layout.jpg", size: "2KB", desc: "고차원 깊이 레이어 통제 Z-인덱스 알고리즘" },
        { month: "APRIL", date: "2026-04-21", file: "0421_1.html", thumb: "thumb_js.jpg", size: "1KB", desc: "스크립트 커널 비동기 엔진 마운트 런타임" },
        { month: "APRIL", date: "2026-04-21", file: "0421_1.js",  thumb: "thumb_js.jpg", size: "1KB", desc: "독립 모듈형 데이터 액션 핸들러 소스" },
        { month: "APRIL", date: "2026-04-21", file: "0421_2.html", thumb: "thumb_js.jpg", size: "1KB", desc: "이벤트 버블링 및 캡처링 단계 데이터 인터셉트" },
        
        { month: "MAY",   date: "2026-05-12", file: "0512_1.html", thumb: "thumb_flex.jpg", size: "2KB", desc: "CSS 플렉스박스 가변 축 분할 아키텍처" },
        // ★ 한글 파일명을 영문 규격으로 완벽 교체 완료
        { month: "MAY",   date: "2026-05-19", file: "0512_factorization.html", thumb: "thumb_algo.jpg", size: "8KB", desc: "자바스크립트 소인수분해 알고리즘 동적 렌더링" },
        { month: "MAY",   date: "2026-05-19", file: "0512_advanced_canvas.html", thumb: "thumb_canvas.jpg", size: "4KB", desc: "심화 웹 보안 메커니즘 및 캔버스 셰이더 분석" }
    ],

    /**
     * @namespace Renderer
     * @description [수행평가 3단계, 5단계 대응] 상대경로 기반 앵커 태그 및 돔 구조 컴파일러.
     */
    Renderer: {
        renderVirtualDOM: function() {
            const startMark = performance.now();
            const viewport = document.getElementById('project-viewport');
            viewport.innerHTML = ''; 

            const state = GosaekEngine.StateManager.state;
            const groups = { 'MARCH': [], 'APRIL': [], 'MAY': [] };

            // 1. 검색 및 카테고리 필터링 라우팅
            const filteredData = GosaekEngine.Database.filter(node => {
                const passChannel = state.filter === 'ALL' || node.month === state.filter;
                const passToken = node.file.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                                  node.desc.toLowerCase().includes(state.searchQuery.toLowerCase());
                return passChannel && passToken;
            });

            filteredData.forEach(item => groups[item.month].push(item));

            // 2. HTML 문자열 빌더 패턴 (상대 경로 적용)
            for (const [monthKey, nodes] of Object.entries(groups)) {
                if (nodes.length === 0) continue;

                const monthTitle = monthKey === 'MARCH' ? '01. MARCH' : monthKey === 'APRIL' ? '02. APRIL' : '03. MAY & SPECIALS';
                let htmlBlock = `<div class="project-group">
                                    <h2 class="group-title">${monthTitle}</h2>
                                    <div class="project-grid">`;

                nodes.forEach(n => {
                    // [수행평가 5단계 완벽 준수] href="projects/파일명.html" 상대경로 설정
                    const relativeLink = `projects/${n.file}`;
                    // [수행평가 4단계 완벽 준수] 이미지 썸네일 경로 및 제작일(date) 할당
                    const imageLink = `images/${n.thumb}`;
                    
                    htmlBlock += `
                        <a href="${relativeLink}" class="project-card">
                            <div class="card-thumbnail">
                                <img src="${imageLink}" alt="${n.file} 썸네일 이미지" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80';">
                            </div>
                            <div class="card-content">
                                <div class="card-header">
                                    <h3 class="card-title">${n.file}</h3>
                                    <span class="card-size">${n.size}</span>
                                </div>
                                <p class="card-desc">${n.desc}</p>
                                <div class="card-footer">
                                    <span>Compiled Node</span>
                                    <span>${n.date}</span>
                                </div>
                            </div>
                        </a>
                    `;
                });

                htmlBlock += `</div></div>`;
                viewport.innerHTML += htmlBlock;
            }

            // 3. 계측 텔레메트리 업데이트
            const endMark = performance.now();
            document.getElementById('stat-latency').innerText = `${(endMark - startMark).toFixed(2)} ms`;
            document.getElementById('stat-nodes').innerText = `${filteredData.length} Nodes`;
        },

        bindEvents: function() {
            // 검색 이벤트 (Debounce 적용 가능)
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', (e) => {
                GosaekEngine.StateManager.state.searchQuery = e.target.value;
                this.renderVirtualDOM();
            });

            // 필터 채널 스위치
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    const targetFilter = e.target.getAttribute('data-filter');
                    GosaekEngine.StateManager.state.filter = targetFilter;
                    GosaekEngine.Logger.push('INFO', `라우팅 채널 전환: [${targetFilter}]`);
                    this.renderVirtualDOM();
                });
            });
        }
    },

    /**
     * @namespace SecurityGateway
     * @description 로그인 모방 터미널 인터페이스 제어 모듈
     */
    SecurityGateway: {
        targetCode: 'gosaek2026',
        
        init: function() {
            const input = document.getElementById('gateway-input');
            const layer = document.getElementById('security-gateway-layer');
            const stream = document.getElementById('gateway-stream');
            
            // 전역 포커스 보정
            layer.addEventListener('click', () => input.focus());
            input.focus();

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const cmd = input.value.trim().toLowerCase();
                    if (!cmd) return;
                    
                    stream.innerHTML += `<div class="log-line"><span class="prompt-user">guest:~$</span> ${cmd}</div>`;
                    input.value = '';

                    if (cmd === 'unlock') {
                        this.unlockSystem(layer);
                    } else if (cmd === 'help') {
                        stream.innerHTML += `<div class="log-line info">- unlock : 보안 우회 및 메인 아카이브 접속<br>- ls : 커널 디렉토리 확인<br>- clear : 터미널 초기화</div>`;
                    } else if (cmd === 'ls') {
                        stream.innerHTML += `<div class="log-line info">assets/  css/  images/  js/  projects/  index.html</div>`;
                    } else if (cmd === 'clear') {
                        stream.innerHTML = '';
                    } else {
                        stream.innerHTML += `<div class="log-line error">명령어를 찾을 수 없습니다: ${cmd}</div>`;
                    }
                    stream.scrollTop = stream.scrollHeight;
                }
            });

            // 이스터에그 마스터 패스 (빨간 버튼)
            document.getElementById('bypass-trigger').addEventListener('click', () => {
                stream.innerHTML += `<div class="log-line success">[마스터 권한] 강제 우회 시퀀스 가동...</div>`;
                setTimeout(() => this.unlockSystem(layer), 400);
            });
        },

        unlockSystem: function(layerObj) {
            layerObj.style.opacity = '0';
            GosaekEngine.StateManager.state.isUnlocked = true;
            
            setTimeout(() => {
                layerObj.style.display = 'none';
                document.getElementById('main-runtime-pipeline').style.display = 'block';
                
                GosaekEngine.Renderer.renderVirtualDOM();
                GosaekEngine.Renderer.bindEvents();
                GosaekEngine.Logger.init();
                
                setTimeout(() => {
                    document.getElementById('main-runtime-pipeline').style.opacity = '1';
                }, 50);
            }, 500);
        }
    },

    /**
     * @namespace Logger
     * @description 하단 실시간 시스템 트래픽 콘솔 제어
     */
    Logger: {
        init: function() {
            this.push('SYSTEM', '백엔드 데이터 트래픽 모니터링 데몬 활성화 완료.');
            this.updateClock();
            setInterval(() => this.updateClock(), 1000);

            document.getElementById('monitor-toggle').addEventListener('click', () => {
                document.getElementById('system-monitor').classList.toggle('open');
            });
        },
        updateClock: function() {
            const now = new Date();
            document.getElementById('sys-clock').innerText = `SYS_TIME: ${now.toISOString().replace('T', ' ').substring(0, 19)}`;
        },
        push: function(level, msg) {
            const stream = document.getElementById('monitor-stream');
            if(!stream) return;
            const time = new Date().toLocaleTimeString();
            let cls = 'info';
            if (level === 'SYSTEM') cls = 'sys';
            if (level === 'ERROR') cls = 'error';
            if (level === 'SUCCESS') cls = 'success';
            
            stream.innerHTML += `<div class="log-line"><span>[${time}]</span> <span class="${cls}">[${level}]</span> ${msg}</div>`;
            stream.scrollTop = stream.scrollHeight;
        }
    }
};

// 런타임 진입점 (Entry Point)
document.addEventListener("DOMContentLoaded", () => {
    GosaekEngine.StateManager.initTheme();
    GosaekEngine.SecurityGateway.init();
});