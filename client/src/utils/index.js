import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = () => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  console.log(randomIndex);
  const randomPrompt = surpriseMePrompts[randomIndex];
  return randomPrompt;
};
