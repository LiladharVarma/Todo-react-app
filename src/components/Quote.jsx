import React from "react";

const Quote = () => {
  // const [quote, setQuote] = useState("");

  // const key = "13b1c626d9mshe2ebed72e11ac55p125ed5jsndfce059f0d2d";
  // const url = `https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes/?rapidapi-key=${key}`;

  // const getQuote = () => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then((result)=> {
  //     setQuote(result) ;
  //     console.log(quote) ;
  //     console.log(result) ;
  //   })
  // }
  // useEffect(()=> {
  //   getQuote() ;

  // } , [])

  return (
    <div className=" block m-auto relative text-wrap text-justify">
      <h2 className="font-Quicksand text-2xl font-bold ">Process Is More Important Than Result</h2>
      <span className="font-semibold absolute right-0">-M.S.Dhoni</span>
    </div>
  );
};

export default Quote;
