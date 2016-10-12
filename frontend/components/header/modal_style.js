const ModalStyle = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(10, 10, 10, 0.65)',
    zIndex          : 10
  },
  content: {
    position        : 'absolute',
    top             : 'initial',
    left            : '50%',
    right           : 'initial',
    bottom          : 'initial',
    transform       : 'translateX(-50%) translateY(0)',
    padding         : '20px 10px',
    background      : '#ffffff',
    overflow        : 'auto',
    borderRadius    : '4px',
    outline         : 'none',
    textAlign       : 'center',
    width           : '308px',
    transition      : 'transform 1s',
    border          : '1px solid rgb(210, 214, 223)',
    zIndex          : 11,
  }
};

export default ModalStyle;
