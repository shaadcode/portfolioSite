import { useTechnologies } from '@/constants/constants';
import { v4 as uuidv4 } from 'uuid';
import { TcmsSelectListTech, TformData } from '@/constants/types';
import GetData from '@/server/GetData';
import { sendPortfolio } from '@/server/sendPortfolio';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import SelectedTechno from './SelectedTechno';
import TechnoOptSelectList from './TechnoOptSelectList';
import { APIs } from '@/services/API';

const PortfolioCMS = () => {
  const [sendCommand, setSendCommand] = useState(false);
  const [allPortfolios, setAllPortfolios] = useState<number>(0);
  const [techList, setTechList] = useState<TcmsSelectListTech[]>([]);
  const [formData, setFormData] = useState<TformData>();
  const nameProjectInput = useRef<HTMLInputElement>(null!);
  const typeProjectInput = useRef<HTMLInputElement>(null!);
  const linkProjectInput = useRef<HTMLInputElement>(null!);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await GetData(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}${APIs.customAPIs.Portfolios}`,
        );
        setAllPortfolios(getData.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (sendCommand) {
      const fetchData = async () => {
        try {
          const getData = await GetData(
            `${process.env.NEXT_PUBLIC_BASE_URL_API}${APIs.customAPIs.Portfolios}`,
          );
          setAllPortfolios(getData.length);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        sendCommand && (await sendPortfolio(formData));
        setAllPortfolios((prev) => prev + 1);

        formRef.current?.reset();

        setTechList([]);
      };
      fetchData();
      setSendCommand(false);
    }
  }, [sendCommand]);

  useEffect(() => {
    createData();
  }, [techList]);

  function generateUniqueId() {
    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/[^0-9]/g, ''), 10);

    return numericId;
  }
  function createData() {
    const nameTechs = techList.map((item) => {
      return item.name;
    });
    setFormData({
      uid: generateUniqueId(),
      nameProject: nameProjectInput.current.value.trim(),
      typeProject: typeProjectInput.current.value.trim(),
      linkProject: linkProjectInput.current.value.trim(),
      useTechsProject: nameTechs,
      time: `${Date().slice(0, 24)}`,
    });
  }

  function deleteTech(techId: number) {
    const newTechList = techList.filter((techItem) => {
      return techItem.id !== techId;
    });
    setTechList(newTechList);
  }
  function addTech(tech: TcmsSelectListTech) {
    if (!techList.some((item) => item.id === tech.id)) {
      setTechList((prev) => [...prev, { id: tech.id, name: tech.name }]);
    }
  }

  return (
    <div className="ic-jc flex flex-col gap-10">
      <div>
        <span
          className={`${classNames({
            flex: allPortfolios,
            hidden: allPortfolios === undefined,
          })}cursor-pointer select-none`}>
          <span>{allPortfolios} </span>
          تا نمونه کار داری!
        </span>
      </div>
      <div className="h-fit w-full">
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flexCenter flex-col gap-4">
          <div className="flexCenter gap-3">
            <input
              ref={nameProjectInput}
              onChange={() => createData()}
              name="nameProject"
              className="rounded-xl p-4 font-medium text-secColor outline-none"
              type="text"
              placeholder="نام پروژه"
            />

            <input
              ref={typeProjectInput}
              onChange={() => createData()}
              name="typeProject"
              className="rounded-xl p-4 font-medium text-secColor outline-none"
              type="text"
              placeholder="نوع پروژه"
            />
          </div>
          <div className="flexCenter w-full flex-col gap-3">
            <input
              ref={linkProjectInput}
              onChange={() => createData()}
              name="link"
              className="w-full rounded-xl p-4 font-medium text-secColor outline-none"
              type="text"
              placeholder="لینک پروژه(یک کلمه)"
            />
            <div className="flexCenter w-full flex-col gap-4">
              <div
                className={`${classNames({
                  flex: techList.length > 0,
                  hidden: techList.length === 0,
                })} ic-jc w-full rounded-xl bg-white p-4`}>
                <ul className="flex w-full max-w-[426px] flex-wrap items-center justify-start gap-4">
                  {techList.map((tech, index) => (
                    <SelectedTechno
                      key={index}
                      tech={tech}
                      deleteTech={deleteTech}
                    />
                  ))}
                </ul>
              </div>
              <div className="flexCenter w-full">
                <select
                  onChange={(e) =>
                    addTech({
                      id: techList.length,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl p-4 font-bold text-thirdColor">
                  <option>تکنولوژی ها!</option>
                  {useTechnologies.map((tech, index) => (
                    <TechnoOptSelectList key={index} title={tech.title} />
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => setSendCommand(true)}
            className="h-fit w-full rounded-2xl bg-secColor py-4 text-base font-bold">
            ایجاد
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioCMS;
