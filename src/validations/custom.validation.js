const metamaskAddress = (value, helpers) => {
  if (!value.match(/^0x[a-fA-F0-9]{40}$/)) {
    return helpers.message('Incorrect metamask address');
  }

  return value;
};


module.exports = {
  metamaskAddress
};
