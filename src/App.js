import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
//import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
//import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
//import ListItemButton from "@mui/material/ListItemButton";
//import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import InboxIcon from "@mui/icons-material/MoveToInbox";
//import MailIcon from "@mui/icons-material/Mail";
import { Breakpoint } from "react-socks";
import messaging from "./messaging.svg";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";

const messages = [
  {
    id: 1,
    recipient: "Emily",
    message:
      "Do you have a suggestion for a good present for John on his work anniversary? I am really confused and would love your thoughts on it.",
    avatar: "",
    date: "2023-02-12T09:30:00Z",
  },
  {
    id: 2,
    recipient: "Sophia",
    message:
      "I need your help with finding a great gift for John's work anniversary. Any ideas? I'm quite unsure about what to get.",
    avatar: "",
    date: "2023-03-05T14:45:00Z",
  },
  {
    id: 3,
    recipient: "Ethan",
    message:
      "Hey there! Can you assist me in selecting a suitable present for John on his work anniversary? I'm really confused and could use some suggestions.",
    avatar: "",
    date: "2023-04-18T10:20:00Z",
  },
  {
    id: 4,
    recipient: "Olivia",
    message:
      "Could you please recommend a good gift for John on his work anniversary? I'm feeling quite indecisive and would appreciate your input.",
    avatar: "",
    date: "2023-01-23T16:10:00Z",
  },
  {
    id: 5,
    recipient: "Liam",
    message:
      "I'm struggling to come up with a great present for John's work anniversary. Any suggestions? Your thoughts would be really helpful!",
    avatar: "",
    date: "2023-06-07T12:50:00Z",
  },
  {
    id: 6,
    recipient: "Ava",
    message:
      "Do you have any ideas for a good gift for John's work anniversary? I'm feeling quite lost and would appreciate some guidance.",
    avatar: "",
    date: "2023-05-02T09:25:00Z",
  },
  {
    id: 7,
    recipient: "Noah",
    message:
      "I'm really confused about what to get for John on his work anniversary. Can you help me out with some suggestions?",
    avatar: "",
    date: "2023-03-19T14:30:00Z",
  },
  {
    id: 8,
    recipient: "Mia",
    message:
      "Hey! I'm struggling to find the perfect gift for John on his work anniversary. Any recommendations? Your input would be highly appreciated.",
    avatar: "",
    date: "2023-02-06T11:40:00Z",
  },
  {
    id: 9,
    recipient: "James",
    message:
      "I need some suggestions for a good present for John on his work anniversary. I'm really confused and would love to hear your thoughts.",
    avatar: "",
    date: "2023-05-14T16:55:00Z",
  },
  {
    id: 10,
    recipient: "Harper",
    message:
      "Can you help me come up with a great gift idea for John's work anniversary? I'm having trouble deciding and would value your opinion.",
    avatar: "",
    date: "2023-01-28T13:20:00Z",
  },
  {
    id: 11,
    recipient: "Harper",
    message: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat metus a egestas aliquet. Sed non erat sodales, dignissim risus ut, molestie turpis. Integer consequat velit ut neque viverra, sed posuere justo consectetur. Sed sit amet aliquam neque. Pellentesque imperdiet ante molestie, accumsan metus id, aliquet ligula. In ultrices laoreet leo, at sollicitudin turpis tempor in. Ut at neque feugiat turpis ullamcorper tristique et vel nulla. Nulla dictum vitae magna quis luctus.
      
      Aenean vehicula, velit ultrices fermentum feugiat, nibh diam dignissim tellus, vitae iaculis est augue at nisl. Vestibulum quis faucibus massa, in finibus odio. Maecenas est dolor, tincidunt id luctus nec, ultricies in leo. Etiam varius posuere rhoncus. Aenean volutpat dui lorem, eget aliquam risus scelerisque at. Proin feugiat vestibulum mi, vel dignissim mauris iaculis et. Aenean commodo tortor vulputate lacus sagittis, id fermentum nisi porttitor. Nullam vitae convallis sem, in lobortis sapien. Maecenas convallis lectus sit amet urna semper tincidunt. In aliquet maximus dolor, viverra porttitor metus semper eget. Quisque dictum mi id lorem suscipit luctus. Vestibulum et mattis mi. Vivamus tellus nulla, tempor eu metus at, tincidunt lacinia elit. Sed lacinia, arcu quis tincidunt egestas, nunc est rutrum augue, nec mollis arcu magna ut tortor. Proin nunc ante, dapibus non neque nec, pharetra pulvinar arcu.
      
      Integer lectus enim, imperdiet in felis eget, dignissim dapibus diam. Duis commodo purus purus, non bibendum lorem fermentum egestas. Duis et metus orci. Maecenas ullamcorper ante vel sem fringilla maximus. Pellentesque vulputate purus est, et tempor enim egestas eget. Praesent sapien massa, accumsan eu iaculis eu, lacinia vitae metus. Cras vitae posuere lacus. Integer vestibulum sollicitudin nunc at luctus. Vestibulum vel tincidunt lectus.
      
      Sed iaculis eleifend ultrices. Mauris dapibus mi non pellentesque tempus. Praesent fringilla a nisi et viverra. Curabitur risus nunc, tincidunt eget nisl nec, venenatis consectetur sapien. Mauris tristique iaculis enim, in euismod eros. Fusce non condimentum purus, tempus luctus mi. Nunc vitae ante at velit tristique tincidunt. Quisque eu molestie ante, vitae viverra neque.
      

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat metus a egestas aliquet. Sed non erat sodales, dignissim risus ut, molestie turpis. Integer consequat velit ut neque viverra, sed posuere justo consectetur. Sed sit amet aliquam neque. Pellentesque imperdiet ante molestie, accumsan metus id, aliquet ligula. In ultrices laoreet leo, at sollicitudin turpis tempor in. Ut at neque feugiat turpis ullamcorper tristique et vel nulla. Nulla dictum vitae magna quis luctus.

Aenean vehicula, velit ultrices fermentum feugiat, nibh diam dignissim tellus, vitae iaculis est augue at nisl. Vestibulum quis faucibus massa, in finibus odio. Maecenas est dolor, tincidunt id luctus nec, ultricies in leo. Etiam varius posuere rhoncus. Aenean volutpat dui lorem, eget aliquam risus scelerisque at. Proin feugiat vestibulum mi, vel dignissim mauris iaculis et. Aenean commodo tortor vulputate lacus sagittis, id fermentum nisi porttitor. Nullam vitae convallis sem, in lobortis sapien. Maecenas convallis lectus sit amet urna semper tincidunt. In aliquet maximus dolor, viverra porttitor metus semper eget. Quisque dictum mi id lorem suscipit luctus. Vestibulum et mattis mi. Vivamus tellus nulla, tempor eu metus at, tincidunt lacinia elit. Sed lacinia, arcu quis tincidunt egestas, nunc est rutrum augue, nec mollis arcu magna ut tortor. Proin nunc ante, dapibus non neque nec, pharetra pulvinar arcu.

Integer lectus enim, imperdiet in felis eget, dignissim dapibus diam. Duis commodo purus purus, non bibendum lorem fermentum egestas. Duis et metus orci. Maecenas ullamcorper ante vel sem fringilla maximus. Pellentesque vulputate purus est, et tempor enim egestas eget. Praesent sapien massa, accumsan eu iaculis eu, lacinia vitae metus. Cras vitae posuere lacus. Integer vestibulum sollicitudin nunc at luctus. Vestibulum vel tincidunt lectus.

Sed iaculis eleifend ultrices. Mauris dapibus mi non pellentesque tempus. Praesent fringilla a nisi et viverra. Curabitur risus nunc, tincidunt eget nisl nec, venenatis consectetur sapien. Mauris tristique iaculis enim, in euismod eros. Fusce non condimentum purus, tempus luctus mi. Nunc vitae ante at velit tristique tincidunt. Quisque eu molestie ante, vitae viverra neque.

Suspendisse lacinia ligula eu purus fermentum semper. Mauris eu metus auctor, euismod ligula eu, pulvinar metus. Curabitur quis tempor neque. Nam vitae arcu non nulla tristique pulvinar nec imperdiet orci. Etiam cursus ac est ut lacinia. Mauris sodales vestibulum tellus. Nam elementum mauris ante, non congue purus iaculis vel. Donec pretium, orci eu pretium malesuada, nibh augue rutrum turpis, sagittis interdum ligula mi eget ipsum. Praesent vulputate posuere aliquet. Cras gravida viverra neque, sit amet ultricies augue feugiat sollicitudin. Vivamus efficitur imperdiet nulla, non cursus risus mattis in. Suspendisse vulputate est quis dui efficitur pretium. In lacinia vulputate lectus, ut convallis metus interdum vitae. Phasellus sit amet mi tempor, consequat leo nec, mollis massa. `,
    avatar: "",
    date: "2023-06-23T13:20:00Z",
  },
];

const groupedMessages = {};

messages.sort((a, b) => new Date(b.date) - new Date(a.date));

messages.forEach((message) => {
  const messageDate = new Date(message.date);
  const currentDate = new Date();

  if (
    messageDate.getDate() === currentDate.getDate() &&
    messageDate.getMonth() === currentDate.getMonth() &&
    messageDate.getFullYear() === currentDate.getFullYear()
  ) {
    message.label = "Today";
  } else if (
    messageDate.getDate() === currentDate.getDate() - 1 &&
    messageDate.getMonth() === currentDate.getMonth() &&
    messageDate.getFullYear() === currentDate.getFullYear()
  ) {
    message.label = "Yesterday";
  } else {
    message.label = formatDistanceToNow(messageDate, { addSuffix: true });
  }

  if (message.label) {
    if (!groupedMessages[message.label]) {
      groupedMessages[message.label] = [];
    }
    groupedMessages[message.label].push(message);
  }
});

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  const handleOpenMessage = (messageId) => {
    setSelectedMessage(messageId);
  };

  const handleSendMessage = () => {
    // Implement your logic to send the message here
    console.log("Sending message:", inputMessage);
    setInputMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <Breakpoint large up>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} style={{ maxHeight: "100vh", overflow: "auto" }}>
              <React.Fragment>
                <CssBaseline />
                <Paper square sx={{ pb: "50px" }} position="fixed">
                  <Typography
                    variant="h5"
                    position="sticky"
                    gutterBottom
                    component="div"
                    sx={{
                      p: 2,
                      pb: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    Messages
                  </Typography>
                  <List sx={{ mb: 2 }}>
                    {Object.entries(groupedMessages).map(
                      ([label, messages]) => (
                        <React.Fragment key={label}>
                          <ListSubheader sx={{ bgcolor: "background.paper" }}>
                            {label}
                          </ListSubheader>
                          {messages.map(({ id, recipient, message, date }) => (
                            <ListItem
                              key={id}
                              button
                              onClick={() => handleOpenMessage(id)}
                            >
                              <ListItemAvatar>
                                <Avatar
                                  alt={recipient[0]}
                                  src={recipient[0]}
                                  sx={{
                                    bgcolor: () => {
                                      const colors = [
                                        "#800000", // dark red
                                        "#008000", // dark green
                                        "#000080", // dark blue
                                        "#808000", // dark yellow
                                        "#800080", // dark magenta
                                        "#008080", // dark cyan
                                        "#A35800", // dark orange
                                        "#400040", // dark purple
                                      ];

                                      const index =
                                        recipient[0].charCodeAt(0) %
                                        colors.length;
                                      return colors[index];
                                    },
                                    color: "white",
                                  }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={recipient}
                                secondary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <span>
                                      {message.length > 50
                                        ? `${message.slice(0, 50)}...`
                                        : message}
                                    </span>
                                    <span
                                      style={{
                                        paddingTop: "8px",
                                        color: "#999",
                                        fontSize: "0.59rem",
                                      }}
                                    >
                                      {label.toLowerCase() === "today"
                                        ? formatDistanceToNow(new Date(date), {
                                            addSuffix: true,
                                          })
                                        : new Date(date).toLocaleString()}
                                    </span>
                                  </Box>
                                }
                                primaryTypographyProps={{
                                  variant: "subtitle1",
                                }}
                                secondaryTypographyProps={{
                                  variant: "body2",
                                }}
                              />
                            </ListItem>
                          ))}
                        </React.Fragment>
                      )
                    )}
                  </List>
                </Paper>
              </React.Fragment>
            </Grid>
            {/* Big column */}
            <Grid
              item
              xs={8}
              padding="100px"
              style={{ maxHeight: "100vh", overflow: "auto" }}
            >
              {selectedMessage ? (
                // Render open message view
                <Box sx={{ bgcolor: "background.message.dark" }}>
                  <Typography
                    variant="h5"
                    position="sticky"
                    gutterBottom
                    component="div"
                    sx={{
                      p: 2,
                      pb: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                    bgcolor={"red"}
                  >
                    {
                      messages.find((item) => item.id === selectedMessage)
                        ?.recipient
                    }
                  </Typography>

                  <Typography variant="body1">
                    {
                      messages.find((item) => item.id === selectedMessage)
                        ?.message
                    }
                  </Typography>

                  <Grid
                    item
                    xs={12}
                    style={{ position: "fixed", bottom: 0, zIndex: 2 }}
                    width="70%"
                    mb={5}
                    bgcolor={"red"}
                  >
                    {/* Send Message Input */}
                    <Box display="flex" alignItems="center" padding="8px">
                      <InputBase
                        placeholder="Type your message..."
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                        fullWidth
                        multiline
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                      <IconButton
                        color="primary"
                        aria-label="send message"
                        onClick={handleSendMessage}
                      >
                        <SendIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Box>
              ) : (
                // Render default view
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  width="100%"
                >
                  <img
                    alt="default"
                    src={messaging}
                    style={{ width: "250px" }}
                  />
                  <Typography variant="body2" sx={{ mt: 4 }}>
                    Your new messages will appear here.
                  </Typography>
                </Box>
              )}
            </Grid>
            {/*  */}
          </Grid>
        </Box>
      </Breakpoint>
    </div>
  );
}
