import Max4Node from "max4node";

const max = new Max4Node();
max.bind();

max
  .observe({
    path: "live_set master_track mixer_device volume",
    property: "value"
  })
  .on("value", function(val) {
    console.log("Master track volume: " + val);
  });
