export const MangaList = [{
  image: {
    path: 'images/greeting.png',
    height: 512,
    width: 512,
  },
  dialogues: [{
    text: 'Good Morning Everyone',
    position: {
      left: 500,
      top: 100,
    },
    audio: {
      path: 'audios/morning.mp3',
      delay: 30,
      durationInFrames: 42,
    }
  }]
}, {
  image: {
    path: 'images/girl-couple.png',
    height: 512,
    width: 512,
  },
  dialogues: [{
    text: 'Whereof one cannot speak, thereof one must be silent',
    position: {
      left: 100,
      top: 100,
    },
    audio: {
      path: 'audios/silent.mp3',
      delay: 30,
      durationInFrames: 97,
    }
  }, {
    text: "No man's knowledge here can go beyond his experience",
    position: {
      left: 500,
      top: 100,
    },
    audio: {
      path: 'audios/knowledge.mp3',
      delay: 30,
      durationInFrames: 109,
    }
  }]
}, {
  image: {
    path: 'images/painter.png',
    height: 512,
    width: 512,
  },
  dialogues: [{
    text: 'Leisure is the mother of philosophy',
    position: {
      left: 450,
      top: 120,
    },
    audio: {
      path: 'audios/leisure.mp3',
      delay: 30,
      durationInFrames: 58,
    }
  }]
}];

export const duplicatedMangaList = (() => {
  MangaList
  const time = 30;
  const duplicated = [];
  for (let i = 0; i < time; i++) {
    duplicated.push(...MangaList);
  }
  return duplicated;
})()