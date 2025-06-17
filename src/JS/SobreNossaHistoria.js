
  const timelineData = [
    {
      year: "2022",
      description: "O ano de 2022 foi marcado pelo planejamento inicial e desenvolvimento dos conceitos fundamentais da WebMoon. Muita pesquisa e prototipagem."
    },
    {
      year: "2023",
      description: "A WebMoon é fundada com a missão de transformar ideias em experiências digitais. Com uma equipe enxuta e apaixonada por tecnologia, começamos a atender os primeiros clientes e a construir nossa reputação com sites modernos e personalizados."
    },
    {
      year: "2024",
      description: "Em 2024, focamos na expansão da nossa carteira de clientes e no aprimoramento contínuo dos nossos serviços, introduzindo novas funcionalidades baseadas no feedback recebido."
    },
    {
      year: "2025",
      description: "Para 2025, planejamos o lançamento de uma plataforma de autoatendimento inovadora e a consolidação da WebMoon como referência em soluções digitais no mercado."
    },
    {
      year: "2026",
      description: "O futuro em 2026 prevê a exploração de mercados internacionais e a diversificação do portfólio de serviços da WebMoon, sempre com foco na excelência."
    }
  ];

  const trackEl = document.getElementById('timelineTrack');
  const descriptionEl = document.getElementById('eventDescription');
  const prevBtn = document.getElementById('prevYear');
  const nextBtn = document.getElementById('nextYear');

  let currentActiveItemIndex = 0;

  function buildTimelineItem(eventData, index) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('timeline-item');
    itemDiv.dataset.index = index;

    const yearTextDiv = document.createElement('div');
    yearTextDiv.classList.add('year-text-label');
    yearTextDiv.textContent = eventData.year;

    const markerDiv = document.createElement('div');
    markerDiv.classList.add('year-marker-dot');

    itemDiv.appendChild(yearTextDiv);
    itemDiv.appendChild(markerDiv);

    itemDiv.addEventListener('click', () => {
      if (index !== currentActiveItemIndex) {
        currentActiveItemIndex = index;
        updateTimelineView();
      }
    });

    return itemDiv;
  }

  function updateTimelineView() {
    if (!trackEl.firstElementChild || timelineData.length === 0) {
      descriptionEl.textContent = timelineData.length === 0
        ? "Não há eventos na história."
        : "Erro ao carregar itens.";
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    trackEl.childNodes.forEach(itemNode => {
      itemNode.classList.remove('active');
      if (parseInt(itemNode.dataset.index) === currentActiveItemIndex) {
        itemNode.classList.add('active');
      }
    });

    descriptionEl.textContent = timelineData[currentActiveItemIndex].description;

    const itemWidth = trackEl.firstElementChild.offsetWidth;
    const containerWidth = trackEl.offsetParent.offsetWidth;

    const itemsInView = Math.floor(containerWidth / itemWidth);

    let firstItemInViewIndex = Math.min(
      Math.max(0, currentActiveItemIndex - Math.floor(itemsInView / 2)),
      Math.max(0, timelineData.length - itemsInView)
    );

    const translateValue = -firstItemInViewIndex * itemWidth;
    trackEl.style.transform = `translateX(${translateValue}px)`;

    prevBtn.disabled = currentActiveItemIndex === 0;
    nextBtn.disabled = currentActiveItemIndex === timelineData.length - 1;
  }

  function navigateTimeline(direction) {
    let targetIndex = currentActiveItemIndex;

    if (direction === 'next') {
      targetIndex = Math.min(timelineData.length - 1, currentActiveItemIndex + 1);
    } else if (direction === 'prev') {
      targetIndex = Math.max(0, currentActiveItemIndex - 1);
    }

    if (targetIndex !== currentActiveItemIndex) {
      currentActiveItemIndex = targetIndex;
      updateTimelineView();
    }
  }

  prevBtn.addEventListener('click', () => navigateTimeline('prev'));
  nextBtn.addEventListener('click', () => navigateTimeline('next'));

  function initializeTimeline() {
    if (timelineData.length === 0) {
      updateTimelineView();
      return;
    }

    timelineData.forEach((event, index) => {
      trackEl.appendChild(buildTimelineItem(event, index));
    });

    const initialYearTarget = "2023";
    const foundIndex = timelineData.findIndex(item => item.year === initialYearTarget);
    currentActiveItemIndex = foundIndex !== -1 ? foundIndex : 0;

    setTimeout(() => {
      if (trackEl.firstElementChild) {
        updateTimelineView();
      } else if (timelineData.length > 0) {
        console.error("Timeline items not rendered in DOM despite data existing.");
        descriptionEl.textContent = "Erro ao renderizar a timeline.";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
      }
    }, 100);
  }

  initializeTimeline();

  window.addEventListener('resize', () => {
    if (timelineData.length > 0 && trackEl.firstElementChild) {
      setTimeout(() => {
        updateTimelineView();
      }, 100);
    }
  });