import { Dispatch, SetStateAction } from "react";

export type TmenuItemInPanel = {
    title: string;
    href: string;
  };

export  type TeveryPm = {
    id: number;
    uuid: string;
    messageType: string;
    message: string;
    sendTime: string;
  };

export  type TpersonPms = { 
  id: number;
   messages: TeveryPm[] 
  };
export  type TChatContentProps = {
    selectedPerson: number | undefined;
    isStartFetch: boolean;
  };
export type TnamePersonPropsChat = {
  isStartFetch: boolean;
  setSelectedPerson: React.Dispatch<number | undefined>;
};

export type TnamePersonProps = {
  personData: TPersonDatas;
  setSelectedPerson: React.Dispatch<number | undefined>;
};

export type TPersonDatas = {
  name: string;
  id: number;
  massages: {
    id: number;
    uuid: string;
    massageType: string;
    massage: string;
    sendTime: string;
  };
};

export type TeveryMessageInChat = {
  message: string;
  sendTime: string;
};

export type TeveryMessage = {
  personName: string;
  message: string;
  sendTime: string;
  tell: string
};

export type TusersData = {
  id: number;
  userName: string;
  userTell: string
  userText: string;
  time: string;
};
export type TMessageContentProps = {
  selectedPerson: number | undefined;
  usersData: TusersData[];
};

export type TnamePersonMessageProps = {
  setSelectedPerson: React.Dispatch<number | undefined>;
  setDeletePerson:React.Dispatch<number | undefined>;
  usersData: TusersData[];
};

export type TpersonProps = {
  personData: TusersData;
  setDeletePerson: React.Dispatch<number | undefined>;
  setSelectedPerson: React.Dispatch<number | undefined>;
};

export type TworkSample = {
  id: number;
  nameProject: string;
  typeProject: string
  useTechsProject: [];
  link: string;
  time: string
};

export type TtechItem = {
  title: string;
  image: SVGAElement | any;
  id: number;
};
export type TformData = {
  id?:number
  uid:number
  nameProject: string;
  typeProject: string;
  linkProject: string;
  useTechsProject: string[];
  time: string;
};

export type TportPostedProps = {
  deletePortfolio: (id : number) => void
  nameProject: string
  time: string
  uid: number
}

export type TselectedTechnoProps = {
  deleteTech: (techId : number) => void
  tech:TcmsSelectListTech
}

export type TtechnoOptSelectListProps = {
title: string
}

export type TCmsInputsProps = {
  refVal: MutableRefObject<HTMLInputElement>
  nameVal: string
  classNameVal: string
  typeVal: string
  placeholderVal: string
}

export type TdeleteItemProps = {
  delFunc: (id: number) => void
  id: number
}

export type TcmsSelectListTech = {
  id: number
  name:string
}

export type TcustBtnV1 = {
  setCommand: Dispatch<SetStateAction<string>>;
  commandVal: string;
  tagContent: string;
};


export type TfooterMenuItemProps = {
  title:string
  href:string
}

export type TmobileNavItemProps = {
  href:string
  src:string
}

export type TnavbarItemProps = {
  href: string
  title: string
}

export type TCardContainerProps = {
  id: number;
  nameProject: string;
  typeProject: string
  useTechsProject: [];
  link: string;
  time: string;
};
