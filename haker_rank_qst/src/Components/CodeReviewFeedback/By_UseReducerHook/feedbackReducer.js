import { VOTE_UP, VOTE_DOWN, RESET_ANIMATION } from "./feedbackActions";
import { aspects } from "./aspects";

export const initialState = aspects.map(() => ({
  upvotes: 0,
  downvotes: 0,
  animateUp: false,
  animateDown: false,
}));

export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case VOTE_UP:
      return state.map((item, i) => {
        if (i === action.index) {
          return { ...item, upvotes: item.upvotes + 1, animateUp: true };
        }
        return item;
      });

    case VOTE_DOWN:
      return state.map((item, i) => {
        if (i === action.index) {
          return { ...item, downvotes: item.downvotes + 1, animateUp: true };
        }
        return item;
      });

    case RESET_ANIMATION:
      return state.map((item) => ({
        ...item,
        animateUp: false,
        animateDown: false,
      }));

    default:
      return state;
  }
};
