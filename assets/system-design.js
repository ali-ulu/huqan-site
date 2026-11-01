(() => {
  const layerData = {
    agent: {
      index: "01 / 07", mark: "01", title: "Agent runtime",
      description: "The agent plans and proposes work. HUQAN does not replace the model, orchestrator or agent runtime; it receives a concrete request from a connected client.",
      responsibility: "Create the proposal and identify the requested tool action.",
      boundary: "An agent that never invokes a HUQAN integration is outside this gate's coverage.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/wiki/Architecture.md"
    },
    adapter: {
      index: "02 / 07", mark: "02", title: "Client adapter",
      description: "A client-specific hook or wrapper translates its native event into the shared external-action envelope: agent, session, tool, action kind, arguments and workspace context.",
      responsibility: "Call the gate before the client executes the action.",
      boundary: "A client without a usable pre-execution hook needs a wrapper, gateway or execution boundary.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/external-action-guard.md"
    },
    evidence: {
      index: "03 / 07", mark: "03", title: "Evidence + identity",
      description: "The request can carry source and provenance context, workspace scope and an agent identity card. Identity attribution and cryptographically verified identity are not the same thing.",
      responsibility: "Bind the request to the actor, workspace, capabilities and relevant evidence.",
      boundary: "A syntactically valid identity card is not automatically a verified signature or a complete trust chain.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/external-action-guard.md"
    },
    policy: {
      index: "04 / 07", mark: "04", title: "Policy + risk gate",
      description: "The local policy path evaluates the action request against configured rules and risk signals. Unknown tools or commands do not silently become trusted.",
      responsibility: "Decide before the effect.",
      boundary: "The gate only governs calls that reach it before execution.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/external-action-guard.md"
    },
    authority: {
      index: "05 / 07", mark: "05", title: "Approval Authority",
      description: "A required review is not execution. A human operator decides through a separate authority boundary; the model-facing tool surface does not expose operator-only approval capabilities.",
      responsibility: "Authorize the exact pending action through the operator path.",
      boundary: "The OS service boundary exists only where the authority is installed, trusted and answering; deployment constraints still apply.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/adr/ADR-016-approval-authority-os-boundary.md"
    },
    execution: {
      index: "06 / 07", mark: "06", title: "Execution boundary",
      description: "The connected client uses the gate outcome to proceed, pause or refuse the requested action. Approval is tied to the specific action rather than a broad permission to do something similar.",
      responsibility: "Keep the governed effect behind the decision that applies to it.",
      boundary: "A successful policy check cannot protect a second execution path that bypasses the gate.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/wiki/MCP-and-External-Agent-Integration.md"
    },
    receipt: {
      index: "07 / 07", mark: "07", title: "Trust Receipt",
      description: "The receipt preserves what was evaluated, which policy applied, the approval context and the recorded outcome so the decision can be inspected later.",
      responsibility: "Keep a bounded record of the specific decision.",
      boundary: "A receipt is evidence of a recorded decision, not proof of universal truth or operator honesty.",
      source: "https://github.com/ali-ulu/huqan/blob/main/docs/wiki/Trust-Receipts.md"
    }
  };

  const layerButtons = Array.from(document.querySelectorAll("[data-layer]"));
  const layerFields = {
    index: document.getElementById("layerIndex"),
    mark: document.getElementById("layerMark"),
    title: document.getElementById("layerTitle"),
    description: document.getElementById("layerDescription"),
    responsibility: document.getElementById("layerResponsibility"),
    boundary: document.getElementById("layerBoundary"),
    source: document.getElementById("layerSource")
  };

  function selectLayer(button) {
    const item = layerData[button.dataset.layer];
    if (!item) return;
    layerButtons.forEach(node => node.setAttribute("aria-pressed", String(node === button)));
    Object.keys(layerFields).forEach(key => {
      const field = layerFields[key];
      if (!field) return;
      if (key === "source") field.href = item.source;
      else field.textContent = item[key];
    });
  }

  layerButtons.forEach(button => button.addEventListener("click", () => selectLayer(button)));

  const scenarios = {
    read: {
      status: "ALLOW", className: "allow", command: "git status",
      title: "Read-only inspection passes.",
      description: "The documented default profile lets this read-only command through without prompting.",
      reason: "Low-impact inspection stays fast; review is reserved for uncertainty and risk."
    },
    unknown: {
      status: "REVIEW", className: "review", command: "npm test",
      title: "An unknown command is held for review.",
      description: "The default profile holds this command for review. Unknown commands are not silently allowed.",
      reason: "Explicitly allow routine commands in policy when you have reviewed their scope and effects."
    },
    destructive: {
      status: "BLOCK", className: "block", command: "git push --force",
      title: "A destructive operation is blocked.",
      description: "The documented default profile blocks force-push before the action runs.",
      reason: "A high-impact operation should not proceed just because an agent requested it."
    }
  };

  const scenarioButtons = Array.from(document.querySelectorAll("[data-scenario]"));
  const scenarioFields = {
    status: document.getElementById("scenarioStatus"),
    command: document.getElementById("scenarioCommand"),
    title: document.getElementById("scenarioTitle"),
    description: document.getElementById("scenarioDescription"),
    reason: document.getElementById("scenarioReason")
  };

  function selectScenario(button) {
    const item = scenarios[button.dataset.scenario];
    if (!item) return;
    scenarioButtons.forEach(node => node.setAttribute("aria-pressed", String(node === button)));
    scenarioFields.status.textContent = item.status;
    scenarioFields.status.className = "sd-status " + item.className;
    scenarioFields.command.textContent = item.command;
    scenarioFields.title.textContent = item.title;
    scenarioFields.description.textContent = item.description;
    scenarioFields.reason.textContent = item.reason;
  }

  scenarioButtons.forEach(button => button.addEventListener("click", () => selectScenario(button)));
})();