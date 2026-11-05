/* Huqan Live Diagrams - Deterministic browser-generated diagrams */
/* Generated at runtime by live-diagrams.js - no external dependencies */

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sample data for charts
  const CHART_DATA = [22, 31, 29, 36, 33, 44, 41, 52, 49, 58, 63, 70];
  let trustReceiptCounter = 1;

  // Flow diagram generator
  function generateFlowDiagram(svg) {
    const NS = 'http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox', '0 0 640 180');

    // Clear existing content
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Define styles
    const defs = document.createElementNS(NS, 'defs');
    svg.appendChild(defs);

    // Edit nodes on the left
    const editNodes = [
      {x: 40, y: 40, label: 'Edit 1'},
      {x: 40, y: 80, label: 'Edit 2'},
      {x: 40, y: 120, label: 'Edit 3'},
      {x: 40, y: 160, label: 'Edit 4'},
      {x: 40, y: 100, label: 'Edit 5'}
    ];

    editNodes.forEach((node, i) => {
      const circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', 8);
      circle.setAttribute('fill', '#c8ff67');
      circle.setAttribute('class', 'live-node');
      svg.appendChild(circle);

      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', node.x + 15);
      text.setAttribute('y', node.y + 4);
      text.setAttribute('font-family', '"IBM Plex Mono", monospace');
      text.setAttribute('font-size', '10');
      text.setAttribute('fill', '#a9b4aa');
      text.textContent = node.label;
      svg.appendChild(text);
    });

    // HUQAN gate in center
    const gate = document.createElementNS(NS, 'rect');
    gate.setAttribute('x', 280);
    gate.setAttribute('y', 50);
    gate.setAttribute('width', 80);
    gate.setAttribute('height', 80);
    gate.setAttribute('rx', 20);
    gate.setAttribute('fill', 'linear-gradient(135deg, #1b2c20, #0a0f0c)');
    gate.setAttribute('stroke', '#c8ff67');
    gate.setAttribute('stroke-width', 2);
    gate.setAttribute('class', 'gate-node');
    svg.appendChild(gate);

    // H mark
    const hMark = document.createElementNS(NS, 'text');
    hMark.setAttribute('x', 320);
    hMark.setAttribute('y', 95);
    hMark.setAttribute('font-family', '"IBM Plex Mono", monospace');
    hMark.setAttribute('font-size', '24');
    hMark.setAttribute('font-weight', '800');
    hMark.setAttribute('fill', '#c8ff67');
    hMark.textContent = 'H';
    svg.appendChild(hMark);

    // HUQAN label
    const gateLabel = document.createElementNS(NS, 'text');
    gateLabel.setAttribute('x', 320);
    gateLabel.setAttribute('y', 125);
    gateLabel.setAttribute('font-family', '"IBM Plex Mono", monospace');
    gateLabel.setAttribute('font-size', '10');
    gateLabel.setAttribute('fill', '#a9b4aa');
    gateLabel.textContent = 'HUQAN';
    svg.appendChild(gateLabel);

    // Connector lines from edit nodes to gate
    editNodes.forEach((node, i) => {
      const line = document.createElementNS(NS, 'line');
      line.setAttribute('x1', node.x + 8);
      line.setAttribute('y1', node.y);
      line.setAttribute('x2', 320);
      line.setAttribute('y2', node.y + 6);
      line.setAttribute('stroke', '#c8ff67');
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('stroke-dasharray', '4 4');
      line.setAttribute('class', 'connector');
      if (!prefersReducedMotion) {
        line.style.animation = `dash-drift 2s ease-in-out ${i * 0.3}s infinite`;
      }
      svg.appendChild(line);
    });

    // Trust Receipts stack on the right
    for (let i = 0; i < 3; i++) {
      const receiptY = 60 + (i + 1) * 14;
      const sheet = document.createElementNS(NS, 'rect');
      sheet.setAttribute('x', 380);
      sheet.setAttribute('y', receiptY);
      sheet.setAttribute('width', 138);
      sheet.setAttribute('height', 102);
      sheet.setAttribute('fill', '#0a0f0c');
      sheet.setAttribute('stroke', '#c8ff67');
      sheet.setAttribute('stroke-width', 1);
      svg.appendChild(sheet);

      // Ruled lines
      for (let l = 5; l < 18; l += 3) {
        const rule = document.createElementNS(NS, 'line');
        rule.setAttribute('x1', 382);
        rule.setAttribute('y1', receiptY + l);
        rule.setAttribute('x2', 506);
        rule.setAttribute('y2', receiptY + l);
        rule.setAttribute('stroke', 'rgba(220, 255, 225, 0.1)');
        rule.setAttribute('stroke-width', '0.5');
        svg.appendChild(rule);
      }

      // Receipt label (top sheet only)
      if (i === 0) {
        const label = document.createElementNS(NS, 'text');
        label.setAttribute('x', 395);
        label.setAttribute('y', receiptY + 15);
        label.setAttribute('font-family', '"IBM Plex Mono", monospace');
        label.setAttribute('font-size', '10');
        label.setAttribute('fill', '#c8ff67');
        label.textContent = `TRUST RECEIPT #${trustReceiptCounter}`;
        svg.appendChild(label);
      }

      // Mini bar row
      const bar = document.createElementNS(NS, 'line');
      bar.setAttribute('x1', 382);
      bar.setAttribute('y1', receiptY + 25);
      bar.setAttribute('x2', 450);
      bar.setAttribute('y2', receiptY + 25);
      bar.setAttribute('stroke', '#c8ff67');
      bar.setAttribute('stroke-width', '2');
      svg.appendChild(bar);
    }

    // Increment counter every 2800ms when in view
    if (!prefersReducedMotion) {
      setInterval(() => {
        if (svg.classList.contains('in-view')) {
          trustReceiptCounter++;
          const label = svg.querySelector('text:nth-child(9)');
          if (label) label.textContent = `TRUST RECEIPT #${trustReceiptCounter}`;
        }
      }, 2800);
    }
  }

  // Hub diagram generator
  function generateHubDiagram(svg) {
    const NS = 'http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox', '0 0 300 170');

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // HUQAN gate in center
    const gate = document.createElementNS(NS, 'rect');
    gate.setAttribute('x', 130);
    gate.setAttribute('y', 50);
    gate.setAttribute('width', 40);
    gate.setAttribute('height', 40);
    gate.setAttribute('rx', 10);
    gate.setAttribute('fill', 'linear-gradient(135deg, #1b2c20, #0a0f0c)');
    gate.setAttribute('stroke', '#c8ff67');
    gate.setAttribute('stroke-width', 2);
    svg.appendChild(gate);

    // H mark
    const hMark = document.createElementNS(NS, 'text');
    hMark.setAttribute('x', 150);
    hMark.setAttribute('y', 78);
    hMark.setAttribute('font-family', '"IBM Plex Mono", monospace');
    hMark.setAttribute('font-size', '16');
    hMark.setAttribute('font-weight', '800');
    hMark.setAttribute('fill', '#c8ff67');
    hMark.textContent = 'H';
    svg.appendChild(hMark);

    // Tool tiles around gate
    const tools = [
      {x: 50, y: 30, label: 'CLI'},
      {x: 150, y: 15, label: 'REST'},
      {x: 250, y: 30, label: 'MCP'},
      {x: 180, y: 150, label: 'LIB/UI'}
    ];

    tools.forEach((tool, i) => {
      const tile = document.createElementNS(NS, 'rect');
      tile.setAttribute('x', tool.x - 35);
      tile.setAttribute('y', tool.y - 15);
      tile.setAttribute('width', 70);
      tile.setAttribute('height', 30);
      tile.setAttribute('rx', 8);
      tile.setAttribute('fill', '#0a0f0c');
      tile.setAttribute('stroke', 'rgba(220, 255, 225, .13)');
      tile.setAttribute('stroke-width', 1);
      tile.setAttribute('data-tool', tool.label.toLowerCase());
      if (i === 0) tile.classList.add('tool-on');
      svg.appendChild(tile);

      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', tool.x);
      text.setAttribute('y', tool.y + 4);
      text.setAttribute('font-family', '"IBM Plex Mono", monospace');
      text.setAttribute('font-size', '10');
      text.setAttribute('fill', '#c8ff67');
      text.setAttribute('text-anchor', 'middle');
      text.textContent = tool.label;
      svg.appendChild(text);
    });

    // Connector lines from tools to gate
    const gateCenterX = 150;
    const gateCenterY = 70;
    tools.forEach((tool, i) => {
      const line = document.createElementNS(NS, 'line');
      line.setAttribute('x1', tool.x);
      line.setAttribute('y1', tool.y);
      line.setAttribute('x2', gateCenterX);
      line.setAttribute('y2', gateCenterY);
      line.setAttribute('stroke', '#c8ff67');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-dasharray', '4 4');
      svg.appendChild(line);
    });

    // Tool highlight timer
    if (!prefersReducedMotion) {
      let currentTool = 0;
      setInterval(() => {
        if (svg.classList.contains('in-view')) {
          document.querySelectorAll('.tool-on').forEach(el => el.classList.remove('tool-on'));
          const toolElements = svg.querySelectorAll('[data-tool]');
          if (toolElements[currentTool]) {
            toolElements[currentTool].classList.add('tool-on');
          }
          currentTool = (currentTool + 1) % toolElements.length;
        }
      }, 1700);
    }
  }

  // Chart diagram generator
  function generateChartDiagram(svg) {
    const NS = 'http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox', '0 0 300 170');

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Gridlines
    for (let i = 0; i <= 10; i++) {
      const line = document.createElementNS(NS, 'line');
      line.setAttribute('x1', 50);
      line.setAttribute('y1', 50 + i * 10);
      line.setAttribute('x2', 250);
      line.setAttribute('y2', 50 + i * 10);
      line.setAttribute('stroke', 'rgba(220, 255, 225, 0.08)');
      line.setAttribute('stroke-width', '1');
      svg.appendChild(line);
    }

    // Area chart path
    const areaPoints = CHART_DATA.map((v, i) => {
      const x = 50 + i * 20;
      const y = 120 - (v / 100) * 70;
      return `${x},${y}`;
    }).join(' ');

    const area = document.createElementNS(NS, 'path');
    area.setAttribute('d', `M${areaPoints} L${CHART_DATA.map((v, i) => `${50 + i * 20},120`).join(' ')} Z`);
    area.setAttribute('fill', 'rgba(200, 255, 103, 0.15)');
    area.setAttribute('stroke', 'rgba(200, 255, 103, 0.5)');
    area.setAttribute('stroke-width', '2');
    svg.appendChild(area);

    // Line chart
    const line = document.createElementNS(NS, 'path');
    line.setAttribute('d', `M${areaPoints}`);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', '#c8ff67');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);

    // Data points
    CHART_DATA.forEach((v, i) => {
      const cx = 50 + i * 20;
      const cy = 120 - (v / 100) * 70;
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', cx);
      dot.setAttribute('cy', cy);
      dot.setAttribute('r', 3);
      dot.setAttribute('fill', '#c8ff67');
      svg.appendChild(dot);
    });

    // Grid labels
    CHART_DATA.forEach((v, i) => {
      const label = document.createElementNS(NS, 'text');
      label.setAttribute('x', 50 + i * 20);
      label.setAttribute('y', 135);
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-family', '"IBM Plex Mono", monospace');
      label.setAttribute('font-size', '8');
      label.setAttribute('fill', '#a9b4aa');
      label.textContent = `wk ${i + 1}`;
      svg.appendChild(label);
    });

    // Y-axis labels
    [20, 40, 60, 80].forEach(val => {
      const label = document.createElementNS(NS, 'text');
      label.setAttribute('x', 45);
      label.setAttribute('y', 120 - (val / 100) * 70);
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('font-family', '"IBM Plex Mono", monospace');
      label.setAttribute('font-size', '8');
      label.setAttribute('fill', '#a9b4aa');
      label.textContent = val;
      svg.appendChild(label);
    });

    // FORECAST divider after index 8
    const forecastLine = document.createElementNS(NS, 'line');
    forecastLine.setAttribute('x1', 210);
    forecastLine.setAttribute('y1', 50);
    forecastLine.setAttribute('x2', 210);
    forecastLine.setAttribute('y2', 120);
    forecastLine.setAttribute('stroke', '#ff9d57');
    forecastLine.setAttribute('stroke-width', '2');
    forecastLine.setAttribute('stroke-dasharray', '8 4');
    svg.appendChild(forecastLine);

    const forecastLabel = document.createElementNS(NS, 'text');
    forecastLabel.setAttribute('x', 215);
    forecastLabel.setAttribute('y', 60);
    forecastLabel.setAttribute('font-family', '"IBM Plex Mono", monospace');
    forecastLabel.setAttribute('font-size', '9');
    forecastLabel.setAttribute('fill', '#ff9d57');
    forecastLabel.textContent = 'FORECAST';
    svg.appendChild(forecastLabel);

    // Scrub crosshair (mouse tracking)
    let crosshairX = 250;
    svg.addEventListener('mousemove', (e) => {
      if (svg.classList.contains('in-view')) {
        const rect = svg.getBoundingClientRect();
        crosshairX = e.clientX - rect.left;
        updateCrosshair(e, svg);
      }
    });

    // Tooltip
    function updateCrosshair(e, svgEl) {
      // Remove existing crosshair
      const existing = svgEl.querySelectorAll('.crosshair');
      existing.forEach(el => el.remove());

      // Add crosshair
      const x = Math.max(50, Math.min(250, crosshairX));
      const y = 80;
      const idx = Math.round((x - 50) / 20);
      if (idx >= 0 && idx < CHART_DATA.length) {
        const val = CHART_DATA[idx];
        const firstVal = CHART_DATA[0];
        const pct = Math.round((val - firstVal) / firstVal * 100);
        const verdict = pct >= 20 ? 'ALLOW' : pct >= 0 ? 'REVIEW' : 'BLOCK';

        const vLine = document.createElementNS(NS, 'line');
        vLine.setAttribute('x1', x);
        vLine.setAttribute('y1', 50);
        vLine.setAttribute('x2', x);
        vLine.setAttribute('y2', 120);
        vLine.setAttribute('stroke', 'rgba(200, 255, 103, 0.6)');
        vLine.setAttribute('stroke-width', '1');
        vLine.setAttribute('class', 'crosshair');
        svgEl.appendChild(vLine);
      }
    }
  }

  // Main initialization
  function init() {
    const diagrams = document.querySelectorAll('.ld-diagram');
    if (diagrams.length === 0) return;

    // Process each diagram
    diagrams.forEach(svg => {
      const type = svg.dataset.ld;
      if (type === 'flow') {
        generateFlowDiagram(svg);
      } else if (type === 'hub') {
        generateHubDiagram(svg);
      } else if (type === 'chart') {
        generateChartDiagram(svg);
      }

      // Tooltip for last point on chart
      if (type === 'chart') {
        setTimeout(() => {
          const lastX = 50 + (CHART_DATA.length - 1) * 20;
          const lastY = 120 - (CHART_DATA[CHART_DATA.length - 1] / 100) * 70;
          const firstVal = CHART_DATA[0];
          const lastVal = CHART_DATA[CHART_DATA.length - 1];
          const pct = Math.round((lastVal - firstVal) / firstVal * 100);
          const verdict = pct >= 20 ? 'ALLOW' : pct >= 0 ? 'REVIEW' : 'BLOCK';
          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', lastX);
          label.setAttribute('y', lastY - 15);
          label.setAttribute('text-anchor', 'middle');
          label.setAttribute('font-family', '"IBM Plex Mono", monospace');
          label.setAttribute('font-size', '9');
          label.setAttribute('fill', '#c8ff67');
          label.textContent = `wk ${CHART_DATA.length} · ${verdict} ${pct}%`;
          svg.appendChild(label);
        }, 100);
      }
    });

    // IntersectionObserver for visibility
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const svg = entry.target;
        if (entry.isIntersecting) {
          svg.classList.add('in-view');
        } else {
          svg.classList.remove('in-view');
        }
      });
    }, { threshold: 0.2 });

    diagrams.forEach(svg => observer.observe(svg));

    // Handle reduced motion
    if (prefersReducedMotion) {
      document.querySelectorAll('.ld-card, .ld-frame').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
      });
    }
  }

  // Guard for missing elements, start when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();