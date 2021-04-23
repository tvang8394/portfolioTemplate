/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Palette from "@material-ui/icons/Palette";
import BuildIcon from "@material-ui/icons/Build";
import CodeIcon from "@material-ui/icons/Code";
//import skill Logos
import reactLogo from "assets/img/profile/reactLogo.png";
import reduxLogo from "assets/img/profile/reduxLogo.png";
import javascriptLogo from "assets/img/profile/javascriptLogo.png";
import mongoLogo from "assets/img/profile/mongoLogo.jpg";
import htmlcssLogo from "assets/img/profile/htmlcssLogo.png";
import cLogo from "assets/img/profile/cLogo.png";
import oopLogo from "assets/img/profile/oopLogo.jpg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import RotatingCard from "components/RotatingCard/RotatingCard.js";
import nucampsite from "assets/img/profile/nucampsite.png";
import danneckersWeb from "assets/img/profile/danneckers.png";
import quant from "assets/img/profile/quant.png";
import profilePic from "assets/img/profile/headshot.jpg";

import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Parallax
        image={require("assets/img/profile/banner.png")}
        className={classes.parallax}
      />
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ background: "#DFDCDC" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center" style={{ background: "#DFDCDC" }}>
            <GridItem xs={12} sm={12} md={6}>
              <div
                className={classes.profile}
                style={{ background: "#DFDCDC" }}
              >
                <div>
                  <img src={profilePic} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Tom Vang</h3>
                  <h6>FULL STACK DEVELOPER</h6>
                  <Button
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/tom-vang-6032061a7/"
                    target="blank"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="github"
                    className={classes.margin5}
                    href="https://github.com/tvang8394"
                    target="blank"
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  {/* <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-pinterest"} />
                  </Button> */}
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div
            className={classNames(classes.description, classes.textCenter)}
            style={{ background: "#DFDCDC", color: "black" }}
          >
            <p>
              I am transitioning to becoming a full stack developer focusing on
              backend work. Questions such as which database is being used? How
              do I access the data? How do I find the right data? and
              understanding API's. All of these sound more interesting to
              me.Outside of the web developement world I am also interested in
              game development and programming with eletronics, using sensors,
              raspberry-pi's, arduinos. Coding is every where!! Other then that
              I enjoy playing tennis, archery and farming. I'd like to combine
              my interet into one project in the future and if possible develop
              my own app.{" "}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="danger"
              tabs={[
                {
                  tabButton: "Skills",
                  tabIcon: CodeIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <RotatingCard
                          s1={"React"}
                          s2={"Redux"}
                          s1Img={reactLogo}
                          s2Img={reduxLogo}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <RotatingCard
                          s1={"JavaScript"}
                          s2={"Mongo DB"}
                          s1Img={javascriptLogo}
                          s2Img={mongoLogo}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <RotatingCard
                          s1={"HTML"}
                          s2={"CSS"}
                          s1Img={htmlcssLogo}
                          s2Img={htmlcssLogo}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <RotatingCard
                          s1={"OOP"}
                          s2={"C#"}
                          s1Img={oopLogo}
                          s2Img={cLogo}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Projects",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + danneckersWeb + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="warning"
                                  className={classes.badge}
                                >
                                  Next.js, React, Redux, Clover API
                                </Badge>
                                <a
                                  href="https://danneckers.vercel.app/danneckers"
                                  target="blank"
                                >
                                  <h2 className={classes.cardTitleWhite}>
                                    Danneckers E-commerence
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + quant + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="info" className={classes.badge}>
                                  Python, Quant, Algorithm, Stocks
                                </Badge>
                                <a
                                  href="https://www.quantconnect.com/terminal/processCache/?request=embedded_backtest_3f858a34fcc3def90d93014e3a585e9d.html"
                                  target="blank"
                                >
                                  <h2 className={classes.cardTitleWhite}>
                                    QuantConnect
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + reactLogo + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="danger" className={classes.badge}>
                                  Python, Linux, GPIO, sensors, Flask, RPi
                                </Badge>
                                <a href="#">
                                  <h2 className={classes.cardTitleWhite}>
                                    Automatic Dosage Machine
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + nucampsite + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="success"
                                  className={classes.badge}
                                >
                                  Bootstrap, Mongo DB, React
                                </Badge>
                                <a href="#">
                                  <h2 className={classes.cardTitleWhite}>
                                    NuCamp Website
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Work in Progress",
                  tabIcon: BuildIcon,
                  tabContent: (
                    <div>
                      <GridContainer > 
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={6} md={6}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Gym Battle
                                  </h4>
                                  <Muted>
                                    <h6>Mobile App</h6>
                                  </Muted>
                                  <p
                                    className={classes.description}
                                    style={{ color: "black" }}
                                  >
                                    Idea for a workout app. Using react native
                                    and expo.
                                    <li>3 pages</li>
                                    <li>Mock up</li>
                                    <li>No functionality.</li>
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={6} md={6}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Pivot Trading Strategy
                                  </h4>
                                  <Muted>
                                    <h6>Web App</h6>
                                  </Muted>
                                  <p
                                    className={classes.description}
                                    style={{ color: "black" }}
                                  >
                                    Idea to create a web app focused on one
                                    trading strategy.
                                    <li>Dashboard</li>
                                    <li>Real-time data</li>
                                    <li>Candle stick Charting</li>
                                    <li>Connected to Alpacha API</li>
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={6} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    SwipeBattle
                                  </h4>
                                  <Muted>
                                    <h6>VIDEO GAME</h6>
                                  </Muted>
                                  <p
                                    className={classes.description}
                                    style={{ color: "black" }}
                                  >
                                    Idea is to create a Mobile game. All concept
                                    currently nothing built.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
}
