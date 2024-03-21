const Home = () => {
    return (
      <>

        {testbeds.map((t) => (
          <div key={t.title}>
            <h2>{t.title}</h2>
            {t.description}
            {t.request_method}
            {t.request_uri}
            {t.response_code_expected}
            {t.request_value}
            {t.request_description}
            {t.response_content_type}
            {t.response_body}
            {t.response_code}
            {t.response_header}
            {t.sample_code}
          </div>
        ))}

      </>
    );
  };
  
  export default Home;
  

  const testbeds = [
    {
      title:"계좌 개설 API",
      description:"계좌 개설 API에 대한 설명이 여기에 들어갑니다.",
      request_method:"POST",
      request_uri:"/account/{bankId}",
      response_code_expected:"OK",
      request_value:"요청으로 보낼 JSON DATA",
      request_description:"요청으로 보낼 데이터에 대한 설명",
      response_content_type:"application/json",
      response_body:"응답 본문",
      response_code:"응답 코드",
      response_header:"응답 헤더",
      sample_code:"샘플 코드"
    },
  ]