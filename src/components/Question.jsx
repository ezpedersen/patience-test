export default function Question({ num, question, setAnswer }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;
    setAnswer(answer);
  };
  return (
    <div className="flex relative">
      <form
        className="bg-amber-200 p-7 rounded-xl m-10 border-yellow-950 border-2"
        onSubmit={handleSubmit}
      >
        <h1 className="block mb-5 text-xl font-semibold text-gray-900 mr-4">
          #{num}. {question}
        </h1>
        <input
          name="answer"
          className="w-full mb-10 text-lg rounded-md border-yellow-950 border-2 p-2"
          required
          placeholder="Answer here"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
