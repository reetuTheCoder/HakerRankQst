export const VOTE_UP = "VOTE_UP";
export const VOTE_DOWN = "VOTE_DOWN";
export const RESET_ANIMATION = "RESET_ANIMATION";


export const voteUp = (index) => ({
  type: VOTE_UP,
  index,
});

export const voteDown = (index) => ({
  type: VOTE_DOWN,
  index,
});

export const resetAnimation = () => ({
  type: RESET_ANIMATION,
});
