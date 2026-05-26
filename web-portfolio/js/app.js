const projectData = [
    // MARCH
    { id: "0310_1", name: "0310_1", desc: "3월 10일 첫 번째 학습 노드 산출물", month: "march", groupName: "MARCH", path: "projects/0310_1.html", img: "https://picsum.photos/seed/node1/900/700" },
    { id: "0310_2", name: "0310_2", desc: "3월 10일 두 번째 복습 프로토타입", month: "march", groupName: "MARCH", path: "projects/0310_2.html", img: "https://picsum.photos/seed/node2/900/700" },
    { id: "0310_3", name: "0310_3", desc: "3월 10일 세 번째 레이아웃 응용 실습", month: "march", groupName: "MARCH", path: "projects/0310_3.html", img: "https://picsum.photos/seed/node3/900/700" },
    { id: "0317_1", name: "0317_1", desc: "3월 17일 컴포넌트 설계 기반 코드", month: "march", groupName: "MARCH", path: "projects/0317_1.html", img: "https://picsum.photos/seed/node4/900/700" },
    { id: "0317_2", name: "0317_2", desc: "3월 17일 인터랙티브 모듈화 테스트", month: "march", groupName: "MARCH", path: "projects/0317_2.html", img: "https://picsum.photos/seed/node5/900/700" },
    { id: "0317_3", name: "0317_3", desc: "3월 17일 반응형 웹 인터페이스 기초", month: "march", groupName: "MARCH", path: "projects/0317_3.html", img: "https://picsum.photos/seed/node6/900/700" },
    { id: "0317_4", name: "0317_4", desc: "3월 17일 미디어 쿼리 응용 심화 노드", month: "march", groupName: "MARCH", path: "projects/0317_4.html", img: "https://picsum.photos/seed/node7/900/700" },
    { id: "0324_1", name: "0324_1", desc: "3월 24일 이벤트 바인딩 제어 구조", month: "march", groupName: "MARCH", path: "projects/0324_1.html", img: "https://picsum.photos/seed/node8/900/700" },
    { id: "0324_2", name: "0324_2", desc: "3월 24일 데이터 돔 변환 아키텍처", month: "march", groupName: "MARCH", path: "projects/0324_2.html", img: "https://picsum.photos/seed/node9/900/700" },
    { id: "0324_3", name: "0324_3", desc: "3월 24일 로컬 상태 비동기 연동", month: "march", groupName: "MARCH", path: "projects/0324_3.html", img: "https://picsum.photos/seed/node10/900/700" },
    { id: "0331_1", name: "0331_1", desc: "3월 31일 애니메이션 키프레임 제어", month: "march", groupName: "MARCH", path: "projects/0331_1.html", img: "https://picsum.photos/seed/node11/900/700" },
    { id: "0331_2", name: "0331_2", desc: "3월 31일 트랜지션 효과 연동 설계", month: "march", groupName: "MARCH", path: "projects/0331_2.html", img: "https://picsum.photos/seed/node12/900/700" },
    { id: "0331_3", name: "0331_3", desc: "3월 분기 결산 마일스톤 통합 노드", month: "march", groupName: "MARCH", path: "projects/0331_3.html", img: "https://picsum.photos/seed/node13/900/700" },

    // APRIL
    { id: "0407_1", name: "0407_1", desc: "4월 7일 차세대 UI/UX 컴포넌트 실습", month: "april", groupName: "APRIL", path: "projects/0407_1.html", img: "https://picsum.photos/seed/node14/900/700" },
    { id: "0407_2", name: "0407_2", desc: "4월 7일 비동기 데이터 렌더링 실험", month: "april", groupName: "APRIL", path: "projects/0407_2.html", img: "https://picsum.photos/seed/node15/900/700" },
    { id: "0407_3", name: "0407_3", desc: "4월 7일 모던 플렉스박스 고도화", month: "april", groupName: "APRIL", path: "projects/0407_3.html", img: "https://picsum.photos/seed/node16/900/700" },
    { id: "0407_4", name: "0407_4", desc: "4월 7일 그리드 시스템 마크업 빌드", month: "april", groupName: "APRIL", path: "projects/0407_4.html", img: "https://picsum.photos/seed/node17/900/700" },
    { id: "0407_5", name: "0407_5", desc: "4월 7일 스키마 다이어그램 구현 노드", month: "april", groupName: "APRIL", path: "projects/0407_5.html", img: "https://picsum.photos/seed/node18/900/700" },
    { id: "0407_6", name: "0407_6", desc: "4월 7일 브라우저 스토리지 연동 제어", month: "april", groupName: "APRIL", path: "projects/0407_6.html", img: "https://picsum.photos/seed/node19/900/700" },
    { id: "0407_7", name: "0407_7", desc: "4월 중순 대비 파이프라인 중간 점검", month: "april", groupName: "APRIL", path: "projects/0407_7.html", img: "https://picsum.photos/seed/node20/900/700" },
    { id: "0421_1", name: "0421_1", desc: "4월 21일 스크롤 트리거 인터랙션", month: "april", groupName: "APRIL", path: "projects/0421_1.html", img: "https://picsum.photos/seed/node21/900/700" },
    { id: "0421_2", name: "0421_2", desc: "4월 21일 가상 요소 다이나믹 제어", month: "april", groupName: "APRIL", path: "projects/0421_2.html", img: "https://picsum.photos/seed/node22/900/700" },
    { id: "0421_3", name: "0421_3", desc: "4월 21일 폼 밸리데이션 가이드라인", month: "april", groupName: "APRIL", path: "projects/0421_3.html", img: "https://picsum.photos/seed/node23/900/700" },
    { id: "0421_4", name: "0421_4", desc: "4월 21일 오디오/비디오 API 연동 실험", month: "april", groupName: "APRIL", path: "projects/0421_4.html", img: "https://picsum.photos/seed/node24/900/700" },
    { id: "0421_5", name: "0421_5", desc: "4월 차트 및 데이터 시각화 모듈", month: "april", groupName: "APRIL", path: "projects/0421_5.html", img: "https://picsum.photos/seed/node25/900/700" },

    // MAY
    { id: "0512_1", name: "0512_1", desc: "5월 12일 컴포넌트 고도화 마이크로 노드", month: "may", groupName: "MAY", path: "projects/0512_1.html", img: "https://picsum.photos/seed/node26/900/700" },
    { id: "my_portfolio", name: "My Portfolio", desc: "개인 맞춤형 종합 포트폴리오 메인 스페이스", month: "may", groupName: "MAY", path: "projects/my_portfolio.html", img: "https://picsum.photos/seed/node27/900/700" },
    { id: "my_profile", name: "My Profile", desc: "개발자 자기소개 및 보유 기술 스택 카드", month: "may", groupName: "MAY", path: "projects/my_profile.html", img: "https://picsum.photos/seed/node28/900/700" }
];

const projectContainer = document.getElementById("project-container");
const nodeCountDisplay = document.getElementById("node-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const filterSlider = document.getElementById("filter-slider");
const scrollProgress = document.getElementById("scroll-progress");

// [수정] 오류를 내던 커서 무브 및 마우스 호버 바인딩 코드 전면 영구 삭제

// 1. 상단 스크롤 진행률 바
window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
});

// 2. 필터 버튼 슬라이딩 백그라운드 엔진
function updateSliderPosition(activeBtn) {
    if (!activeBtn || !filterSlider) return;
    const btnRect = activeBtn.getBoundingClientRect();
    const parentRect = activeBtn.parentElement.getBoundingClientRect();
    
    filterSlider.style.width = `${btnRect.width}px`;
    filterSlider.style.left = `${btnRect.left - parentRect.left}px`;
}

// 3. 데이터 그룹화 및 렌더링 로직
function groupByDate(items) {
    return items.reduce((acc, item) => {
        if (!acc[item.groupName]) acc[item.groupName] = [];
        acc[item.groupName].push(item);
        return acc;
    }, {});
}

function animateNumber(targetValue) {
    let current = 0;
    const increment = targetValue / 30; 
    const interval = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
            nodeCountDisplay.textContent = targetValue;
            clearInterval(interval);
        } else {
            nodeCountDisplay.textContent = Math.ceil(current);
        }
    }, 16);
}

function renderStructuredProjects(items) {
    if (!projectContainer) return;
    projectContainer.innerHTML = "";
    
    animateNumber(items.length);

    if (items.length === 0) {
        projectContainer.innerHTML = `<p style="color: #86868b; text-align: center; padding: 100px 0; font-size: 1.5rem; font-weight: 800;">No Nodes Found.</p>`;
        return;
    }

    const groupedData = groupByDate(items);
    let globalCardIndex = 0; 

    Object.keys(groupedData).forEach((groupName) => {
        const sectionElement = document.createElement("section");
        sectionElement.className = "date-group-section";

        // [복원] 원래의 깔끔했던 상단 월별 배더 폼 구조 유지 (뒤에 배경 글자 안 뜨게 제거)
        const headerElement = document.createElement("div");
        headerElement.className = "date-header-zone hero-reveal";
        headerElement.innerHTML = `
            <div class="date-badge">${groupName}</div>
            <div class="date-extend-line"></div>
        `;
        sectionElement.appendChild(headerElement);

        const gridElement = document.createElement("div");
        gridElement.className = "project-grid";

        groupedData[groupName].forEach((project) => {
            const cardLink = document.createElement("a");
            cardLink.href = project.path;
            cardLink.className = "card-wrapper";
            
            cardLink.style.transitionDelay = `${(globalCardIndex % 10) * 0.08}s`; 

            // [복원] 원래 원하셨던 중앙 정렬 텍스트 카드 레이아웃 정체성 완벽 유지
            cardLink.innerHTML = `
                <div class="card-title">${project.name}</div>
                <hr class="card-mid-line">
                <div class="card-description">${project.desc}</div>
            `;
            gridElement.appendChild(cardLink);
            globalCardIndex++;
        });

        sectionElement.appendChild(gridElement);
        projectContainer.appendChild(sectionElement);
    });

    initScrollReveal();
}

// 4. 시네마틱 스크롤 리빌 옵저버
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card-wrapper').forEach(card => {
        observer.observe(card);
    });
}

// 5. 필터 컨트롤 및 이벤트 바인딩
function filterControl(filterValue) {
    if (filterValue === "all") {
        renderStructuredProjects(projectData);
    } else {
        const filtered = projectData.filter(project => project.month === filterValue);
        renderStructuredProjects(filtered);
    }
}

filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        
        updateSliderPosition(e.target);
        const filterValue = e.target.getAttribute("data-filter");
        
        projectContainer.style.opacity = 0;
        setTimeout(() => {
            filterControl(filterValue);
            projectContainer.style.opacity = 1;
        }, 300);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    projectContainer.style.transition = "opacity 0.3s ease";
    renderStructuredProjects(projectData);
    
    setTimeout(() => {
        const activeBtn = document.querySelector(".filter-btn.active");
        updateSliderPosition(activeBtn);
    }, 100);
});

window.addEventListener("resize", () => {
    const activeBtn = document.querySelector(".filter-btn.active");
    updateSliderPosition(activeBtn);
});