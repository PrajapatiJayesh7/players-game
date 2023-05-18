import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import IMAGES from "../players-images";

const SingleCard = (props) => {
  //   console.log(props);
  const { CCode, SkillDesc, Id, UpComingMatchesList } = props.item;
  console.log(CCode);

  return (
    <div className="card">
      <Card
        sx={{
          /* styling for the Card component */ maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{ height: "100%", marginBottom: "-1px", opacity: 0.6 }}
          //   image={img}
          title="background"
        />
        <CardContent
          sx={{
            /* styling for the CardContent */
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.8,
            zIndex: 1,
            background: "#00152ee8",
          }}
        >
          <p
            style={{
              fontFamily: "Cherry Swash",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#c5e2ff",
            }}
            variant="body2"
          >
            {props.item.PFName} {/* displaying the title of the album */}
          </p>
          <p
            style={{
              fontFamily: "Cherry Swash",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#c5e2ff",
            }}
            variant="body2"
          >
            Skills : {props.item.SkillDesc}{" "}
            {/* displaying the title of the album */}
          </p>
          <p
            style={{
              fontFamily: "Cherry Swash",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#c5e2ff",
            }}
            variant="body2"
          >
            Value : ${props.item.Value}{" "}
            {/* displaying the title of the album */}
          </p>

          <div
            style={{
              fontFamily: "Cherry Swash",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#c5e2ff",
            }}
            variant="body2"
          >
            {Object.values(UpComingMatchesList).map(function (item, key) {
              return (
                <div>
                  `Upcoming Match: {item.CCode} VS {item.VsCCode}` `At Time :{" "}
                  {item.MDate}`
                </div>
              );
            })}
          </div>
        </CardContent>
        <Divider />
      </Card>
    </div>
  );
};

export default SingleCard;
