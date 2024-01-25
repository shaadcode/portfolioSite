// import { Dispatch, SetStateAction, Suspense } from 'react';
// import PersonChat from './PersonChat';

// type TnamePerson = {
//   name: string;
//   id: number;
//   massages: {
//     id: number;
//     uuid: string;
//     massageType: string;
//     massage: string;
//     sendTime: string;
//   }[];
// };
// type TloadDataProps = {
//   data: TnamePerson[];
//   setSelectedPerson: Dispatch<SetStateAction<number | undefined>>;
// };

// const LoadData = ({ data, setSelectedPerson }: TloadDataProps) => {
//   return (
//     <>
//       {data &&
//         data.map((personData, i) => (
//           <PersonChat
//             key={i}
//             personData={personData}
//             setSelectedPerson={setSelectedPerson}
//           />
//         ))}
//     </>
//   );
// };

// export default LoadData;
