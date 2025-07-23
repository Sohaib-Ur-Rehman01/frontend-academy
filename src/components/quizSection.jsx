import "./css/quizSection.css";
export const QuizSection = () => {
  return (
    <>
      <div className="quizSection">
        <h1 className="quizHeading">Not sure where to get started?</h1>
        <p className="quizDescription">
          Answer three short questions and we'll recommend the best learning
          path for your experience level and goals
        </p>
        <button className="quizButton">Take the Quiz</button>
      </div>
    </>
  );
};
