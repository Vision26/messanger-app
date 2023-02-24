import React, { useEffect } from 'react'
import { StreamChat } from 'stream-chat'
import 'stream-chat-react/dist/css/v2/index.css'
import './layout.css'
import { 
  Chat, 
  Channel, 
  ChannelHeader, 
  MessageInput, 
  MessageList, 
  Thread, 
  Window 
} from 'stream-chat-react'
// we'll reuse `useClient` hook from the "Add a Channel List" example
// import { useClient } from './hooks/useClient'

const chatClient = new StreamChat('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicm91bmQtaGF6ZS04IiwiZXhwIjoxNjc3MjE0MDc3fQ.VwgtZmh-wO1oIuEy_6Zz-xwk0y9Ucf-hYZdxSEigT30';
chatClient.connectUser(
  {
    id: 'round-haze-8',
    name: 'round',
    image: 'https://getstream.io/random_png/?id=round-haze-8&name=round',
  },
  userToken,
)
const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['round-haze-8'],
})
// const user = {
//   id: 'round-haze-8',
//   name: 'round',
//   image: 'https://getstream.io/random_png/?id=round-haze-8&name=round',
// }

// const filters = { type: 'messaging', members: { $in: ['round-haze-8'] } }
// const sort = { last_message_at: -1 }

// const attachments = [
//   {
//     image: 'https://images-na.ssl-images-amazon.com/images/I/71k0cry-ceL._SL1500_.jpg',
//     name: 'iPhone',
//     type: 'product',
//     url: 'https://goo.gl/ppFmcR',
//   },
// ]

// const CustomAttachment = (props) => {
//   const { attachments } = props;
//   const [attachment] = attachments || []

//   if (attachment?.type === 'product')
//     return (
//       <div>
//         Product:
//         <a href={attachment.url} rel='noreferrer'>
//           <img alt='custom-attachment' height='100px' src={attachment.image} />
//           <br />
//           {attachment.name}
//         </a>
//       </div>
//     )

//   return <Attachment {...props} />
// }

// const CustomChannelPreview = (props) => {
//   const { channel, setActiveChannel } = props

//   const { messages } = channel.state
//   const messagePreview = messages[messages.length - 1]?.text.slice(0, 30)

//   return (
//     <div onClick={() => setActiveChannel(channel)} style={{ margin: '12px' }}>
//       <div>{channel.data.name || 'Unnamed Channel'}</div>
//       <div style={{ fontSize: '14px' }}>{messagePreview}</div>
//     </div>
//   )
// }

// const CustomMessage = () => {
//   const { message } = useMessageContext()

//   return (
//     <div>
//       <b style={{ marginRight: '4px' }}>{message.user.name}</b> {message.text}
//     </div>
//   )
// }

const App = () => {
  // const chatClient =({ apiKey: 'dz5f4d5kzrue', userData: user, tokenOrProvider: userToken })
  // useEffect(() => {
  //   if (!chatClient) return

  //   const initAttachmentMessage = async () => {
  //     const [channelResponse] = await chatClient.queryChannels(filters, sort)

  //     await channelResponse.sendMessage({
  //       text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
  //       attachments,
  //     })
  //   }

  //   initAttachmentMessage()
  // }, [chatClient])
  // if (!chatClient) {
  //   return <LoadingIndicator />
  // }
  return(
  <Chat client={chatClient} theme='str-chat__theme-light'>
     {/* <ChannelList filters={filters} sort={sort} Preview={CustomChannelPreview}/> */}
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList  />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  )
  }


export default App
{/* <Chat client={chatClient} theme='str-chat__theme-light'>
<ChannelList filters={filters} sort={sort} Preview={CustomChannelPreview}/>
<Channel Attachment={CustomAttachment}>
 <Window>
   <ChannelHeader />
   <MessageList  Message={CustomMessage}/>
   <MessageInput />
 </Window>
 <Thread />
</Channel>
</Chat> */}