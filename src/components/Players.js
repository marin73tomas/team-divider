import React from "react";
import { connect } from "react-redux";

const Players = () => {
  return (
    <section>
      <h2>Players</h2>
      <div>
        <img src="" alt="" />
        <h3></h3>
        <article>
          <button> </button>
          <button> </button>
        </article>
      </div>
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Players);
