import { useEffect, useState } from "react"
import { useFetch } from "./useFetch"

type TpersonData = {
    name: string;
    allRecievePms: number;
    newMessageState : boolean
    id: number;
    messages: Tmessage[];
  };

  type Tmessage = {
    id: number;
    uuid: string;
    messageType: string;
    message: string;
    sendTime: string;
  };

type TinformationChat = {
RMdata : object | undefined
RMisLoading : boolean
RMerror : string | undefined
}

  type Tprops = {
    data?: TpersonData[]
    isLoading?: boolean
    error?: string
  }


  export const useCalcRecieveMessage = ({ data, error }: Tprops) => { 
    const [prevAllRecieveMessage, setPrevAllRecieveMessage] = useState<object>();
    const [lastAllRecieveMessage , setLastAllRecieveMessage] = useState<number | undefined>(0)
    const [unReadMessage , setUnReadMessage] = useState<number | undefined>(0)

    const {data: RMdata , isLoading : RMisLoading , error : RMerror} = useFetch(" http://localhost:5000/information")

    useEffect(() => {
        setPrevAllRecieveMessage(RMdata && RMdata.prevAllRmessage)
    } , [RMdata])

    useEffect(() => {
      function chatStateUnread() {
        if (!error) {
          const sumLastRMessage = data && data.reduce((sum: number, personData: TpersonData) => {
            if(!personData.newMessageState){
                sum += personData.allRecievePms;
            }
            return sum;
          }, 0);
          setLastAllRecieveMessage(sumLastRMessage);
        }
      }

    // function changeChatMessageState() {
    //     if (!error){
    //         data && data.map(personData => {

    //         })
    //     }
    // }


    function calcAllUnReadMessage() {
       if (lastAllRecieveMessage && prevAllRecieveMessage) {
        const unReadMessage = prevAllRecieveMessage - lastAllRecieveMessage
       }
    }

    // calcAllUnReadMessage()
      chatStateUnread();
    }, [data]);
  
    return { prevAllRecieveMessage , lastAllRecieveMessage};
  };