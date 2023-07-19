
if (figma.editorType === 'figma') {
  figma.showUI(__html__);
  figma.ui.resize(1300, 800)
  figma.ui.onmessage = msg => {
    if (msg?.type === "data_received") {
      console.log("msg received from plugin");
      const imageNode = figma.createNodeFromSvg(msg?.value);
      figma.currentPage.appendChild(imageNode);
    }
    figma.closePlugin();
  };
} else {
  figma.showUI(__html__);
  figma.ui.resize(800, 800)
  figma.ui.onmessage = msg => {
    if (msg?.type === "data_received") {
      console.log("msg received from plugin");
      const imageNode = figma.createNodeFromSvg(msg?.value);
      figma.currentPage.appendChild(imageNode);
    }
    figma.closePlugin();
  };
};
