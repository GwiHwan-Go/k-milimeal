// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components/native";
// import { useWindowDimensions } from "react-native";

// const Container = styled.View`
//     background-color: red`;
// const Header = styled.View``;
// const UserAvatar = styled.Image``;
// const Username = styled.Text`
//   color: white;
// `;
// const File = styled.Image``;
// const Actions = styled.View``;
// const Action = styled.TouchableOpacity``;
// const Caption = styled.View``;
// const CaptionText = styled.Text`
//   color: white;
// `;
// const Likes = styled.Text`
//   color: white;
// `;

// function Photo({ id, username, caption, file, isLiked, likes }) {
//   const { width, height } = useWindowDimensions();
//   return (
//     <Container>
//       <Header>
//         <UserAvatar />
//         <Username>{username}</Username>
//       </Header>
//       <File
//         style={{
//           width,
//           height: height - 500,
//         }}
//         source={{ uri: file }}
//       />
//       <Actions>
//         <Action />
//         <Action />
//       </Actions>
//       <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
//       <Caption>
//         <Username>{username}</Username>
//         <CaptionText>{caption}</CaptionText>
//       </Caption>
//     </Container>
//   );
// }

// Photo.propTypes = {
//   id: PropTypes.number.isRequired,
//   username: PropTypes.string.isRequired,
//   caption: PropTypes.string,
//   file: PropTypes.string.isRequired,
//   isLiked: PropTypes.bool.isRequired,
//   likes: PropTypes.number.isRequired,
//   commentNumber: PropTypes.number.isRequired,
// };
// export default Photo;