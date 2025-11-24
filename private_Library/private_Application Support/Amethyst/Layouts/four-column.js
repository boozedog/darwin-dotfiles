function layout() {
  return {
    name: "Four Column",

    initialState: {},

    commands: {
      command1: {
        description: "No-op",
        updateState: (state) => state
      }
    },

    getFrameAssignments: (windows, screenFrame, state) => {
      const assignments = {};

      if (windows.length === 0) {
        return assignments;
      }

      // Calculate column width (25% each)
      const columnWidth = screenFrame.width / 4;

      // Distribute windows across 4 columns
      windows.forEach((window, index) => {
        const columnIndex = index % 4;
        const windowsInColumn = Math.floor(index / 4);
        const totalWindowsInColumn = Math.ceil(windows.filter((_, i) => i % 4 === columnIndex).length);

        const windowHeight = screenFrame.height / totalWindowsInColumn;

        assignments[window.id] = {
          x: screenFrame.x + (columnIndex * columnWidth),
          y: screenFrame.y + (windowsInColumn * windowHeight),
          width: columnWidth,
          height: windowHeight
        };
      });

      return assignments;
    },

    updateWithChange: (change, state) => {
      return state;
    },

    recommendMainPaneRatio: (ratio, state) => {
      return state;
    }
  };
}
