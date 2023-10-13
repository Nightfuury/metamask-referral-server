const express = require("express");
const router = express.Router();

const proposalController = require("../controllers/Proposal/proposal");
const voteController = require("../controllers/VoteProposal/voteProposal");
const setWalletController = require("../controllers/setWallets");
const getWalletController = require("../controllers/getWallets");
const chechMetamaskController = require("../controllers/checkMetamask");

router.get("/", (req, res) => {
  res.send("Connected");
});

router.post("/saveTrx", proposalController.saveProposal);

router.post("/closeProposal", proposalController.updateProposalStatus);

router.get("/getAllProposals", proposalController.getProposals);

router.post("/vote", voteController.saveVote);

router.get("/getAllVotes", voteController.getAllVotes);

router.get("/checkUserVote", voteController.checkUserVote);

router.post("/saveWallets", setWalletController.setWallets);

router.get("/getWallet", getWalletController.getWallet);

router.get("/checkMetamask", chechMetamaskController.checkMetamask);

module.exports = router;
