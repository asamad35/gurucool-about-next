// import heroVideo from "../../public/gurucool.mp4";

const Connecting = () => {
  return (
    <div>
      {/* sectionVideo */}
      <section className="w-screen h-screen">
        <video autoPlay loop style={{ width: "500px", height: "500px" }}>
          <source src={"../../public/gurucool.mp4"} type="video/mp4" />
        </video>
      </section>
    </div>
  );
};

export default Connecting;
