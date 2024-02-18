const EducationInfo = () => {
  return (
    <section className="my_container my-16 md:my-24">
      {/* degree */}
      <div className="lg:w-2/3 mx-auto shadow-lg px-6 py-24 lg:text-center rounded-md">
        <h2 className="text-xl md:text-2xl font-bold uppercase">
          Degree Running
        </h2>
        <div className="text-lg font-medium space-y-2 mt-4">
          <p>Collage: Savar Govt. College</p>
          <p>Subject: Bss (Degree)</p>
          <p>Result: 4.50 (Out of 5.00)</p>
          <p>Session: 2023-2026</p>
          <p>Exam Year: upcoming</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 gap-y-10 mt-6">
        {/* hsc */}
        <div className="shadow-lg py-24 px-6 rounded-md">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            HSC: Higher Secondary Certificate
          </h2>
          <div className="text-lg font-medium space-y-2 mt-4">
            <p>Collage: Altafnagar Technical B.M College</p>
            <p>Group: Science</p>
            <p>Result: 4.50 (Out of 5.00)</p>
            <p>Session: 2010-2011</p>
            <p>Exam Year: 2022</p>
          </div>
        </div>
        {/* ssc */}
        <div className="shadow-lg py-24 px-6 rounded-md">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            SSC: Secondary School Certificate
          </h2>
          <div className="text-lg font-medium space-y-2 mt-4 ">
            <p>School: Savar Badda High School</p>
            <p>Group: Humanities</p>
            <p>Result: 2.89 (Out of 5.00)</p>
            <p>Session: 2017-2018</p>
            <p>Exam Year: 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInfo;
