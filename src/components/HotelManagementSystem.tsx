import React, { Component } from "react";
import {
  Box,
  Typography,
  withStyles,
  Divider,
  Button,
} from "@material-ui/core";
import { Theme, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    boxStyle: {
      marginLeft: "50px",
      marginRight: "50px",
      backgroundColor: "#EEF2F8",
      padding: "15px",
    },
    headingStyle: {
      textAlign: "left",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    descriptionStyle: {
      textAlign: "left",
      marginBottom: "20px",

    },
    circleContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    circleNumber: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#0F52BA",
      color: "white",
      marginRight: "10px",
    },
    circleText: {
      marginLeft: "10px",

    },
    circleWrapper: {
      display: "flex",
      alignItems: "center",
      marginRight: "80px",
    },
  });
interface State {
  showAdditionalSkills: boolean;
}

interface HotelManagementSystemProps extends WithStyles<typeof styles> {}

class HotelManagementSystem extends Component<
  HotelManagementSystemProps,
  State
> {
  constructor(props: HotelManagementSystemProps) {
    super(props);
    this.state = {
      showAdditionalSkills: false,
    };
  }
  toggleAdditionalSkills = () => {
    this.setState((prevState) => ({
      showAdditionalSkills: !prevState.showAdditionalSkills,
    }));
  };
  render() {
    const { showAdditionalSkills } = this.state;
    const { classes } = this.props;
    const additionalSkills = [
      "Skill 4",
      "Skill 5",
      "Skill 6",
      "Skill 7",
      "Skill 8",
      "Skill 9",
      "Skill 10",
    ];

    const defaultSkills = ["Skill 1", "Skill 2", "Skill 3"];
    const remainingSkills = additionalSkills.slice(3);
    return (
      <div style={{marginTop:"20px"}}>
        <Box className={classes.boxStyle} marginTop="90px">
          <Typography variant="h6" className={classes.headingStyle}>
            Hotel Management System
          </Typography>
          <Typography variant="h6" className={classes.descriptionStyle}>
            Hourly-Public
          </Typography>
        </Box>
        <Box className={classes.boxStyle}>
          <Divider />
        </Box>
        <Box className={classes.boxStyle}>
          <Typography variant="h6" className={classes.headingStyle}>
            Project Description:
          </Typography>
          <Typography variant="body1" className={classes.descriptionStyle} style={{overflow:"auto",height:"70px",}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam
            vel deserunt saepe impedit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos magnam illum non aut, eveniet ipsum! Delectus
            assumenda sit incidunt distinctio quos sequi omnis facere tenetur
            eos? Ducimus totam sed nesciunt voluptatum illum aliquam,
            voluptatibus recusandae! Impedit labore obcaecati doloribus rerum
            molestias et error earum accusantium, totam nam dolor, nemo magnam
            quae consequuntur cupiditate id unde, veniam est. Assumenda, rem
            deleniti? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eos dolorum quasi dolor quia perspiciatis animi eveniet perferendis
            reiciendis. Voluptas earum voluptatum quas numquam delectus corporis
            saepe placeat autem laborum porro! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eum libero asperiores veritatis quo?
            Hic molestiae ea maiores pariatur, autem magnam.
          </Typography>
        </Box>
        <Box className={classes.boxStyle}>
          <Divider />
        </Box>
        <Box className={classes.boxStyle}>
          <Typography variant="h6" className={classes.headingStyle}>
            Project Time:
          </Typography>
          <div className={classes.circleContainer}>
            <div className={classes.circleWrapper}>
              <div className={classes.circleNumber}>1</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" style={{fontWeight:"bold"}} className={classes.circleText}>
                  Less than 30 hrs/week
                </Typography>
                <Typography variant="body1" style={{marginRight:"120px"}} className={classes.circleText}>
                  Hourly
                </Typography>
              </div>
            </div>

            <div className={classes.circleWrapper}>
              <div className={classes.circleNumber}>2</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" style={{fontWeight:"bold"}} className={classes.circleText}>
                  1 to 3 months
                </Typography>
                <Typography variant="body1" className={classes.circleText}>
                  Project length
                </Typography>
              </div>
            </div>

            <div className={classes.circleWrapper}>
              <div className={classes.circleNumber}>3</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" style={{fontWeight:"bold",marginRight:"200px"}} className={classes.circleText}>
                  Intermeditate
                </Typography>
                <Typography variant="body1" className={classes.circleText}>
                 I am looking for mix experience and value
                </Typography>
              </div>
            </div>

          </div>
        </Box>
        <Box className={classes.boxStyle}>
          <Divider />
        </Box>
        <Box className={classes.boxStyle}>
          <Typography variant="h6" className={classes.headingStyle}>
            Activity on this job
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" align="left" style={{marginTop:"8px"}}>
              Proposals:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginRight: "80%" }}
            >
              10 to 15
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" align="left" style={{marginTop:"8px"}}>
              Last viewed by the client:{" "}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginRight: "77%" }}
            >
              10 minutes ago
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" align="left" style={{marginTop:"8px"}}>
              Invite sends:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginRight: "83%" }}
            >
              0
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" align="left" style={{marginTop:"8px"}}>
              Unanswered invites:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginRight: "83%" }}
            >
              0
            </Typography>
          </div>
        </Box>
        <Box className={classes.boxStyle}>
          <Divider />
        </Box>
        <Box className={classes.boxStyle}>
          <Typography variant="h6" className={classes.headingStyle}>
            Skills and expertise:
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
            {defaultSkills.map((skill, index) => (
              <Button
                key={index}
                style={{
                  marginRight: "3px",
                  backgroundColor: "#0F52BA",
                  color: "white",
                }}
              >
                {skill}
              </Button>
            ))}
            {showAdditionalSkills &&
              additionalSkills.map((skill, index) => (
                <Button
                  key={index}
                  style={{
                    marginRight: "3px",
                    backgroundColor: "#0F52BA",
                    color: "white",
                  }}
                >
                  {skill}
                </Button>
              ))}
            {!showAdditionalSkills && remainingSkills.length > 0 && (
              <Button
                onClick={this.toggleAdditionalSkills}
                style={{ margin: "5px" }}
              >
                +{additionalSkills.length}
              </Button>
            )}
          </div>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(HotelManagementSystem);
