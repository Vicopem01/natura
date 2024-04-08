import { Fragment } from "react";

const AllGrants = () => {
  const grants = [
    {
      title: "Home Efficiency Rebate Plus (HER+) program ",
      desc: "The Home Efficiency Rebate Plus program, delivered in partnership with the Canada Greener Homes Grant, has been a huge success. In collaboration with the Canada Greener Homes Grant, Enbridge Gas is helping over 100,000 Ontario households reduce their energy consumption and greenhouse gas emissions.",
      link: "https://www.enbridgegas.com/en/residential/rebates-energy-conservation/home-efficiency-rebate-plus",
      types: [
        "$75 instantly on a smart thermostat",
        "Up to $10,000 for energy efficiency upgrades",
        "Up to $600 for pre and post retrofit energy audits (one-time rebate)",
        "Home Insulation up to $10,000",
        "Air Sealing up to $1,300",
        "Windows and Doors up to $325 each",
      ],
    },
    {
      title: "Canada Greener Home Loans",
      desc: "The Canada Greener Homes Loan offers interest-free financing to help Canadians make their homes more energy efficient and comfortable.",
      link: "https://natural-resources.canada.ca/energy-efficiency/homes/canada-greener-homes-grant/start-your-energy-efficient-retrofits/plan-document-and-complete-your-home-retrofits/eligible-grants-for-my-home-retrofit/23504",
      types: [
        "Grants from $125 to $5,000",
        "Interest-free loans up to $40,000, a repayment term of 10 years",
      ],
    },
    {
      title: "Energy Affordability Program",
      desc: "The Energy Affordability Program offers energy-saving upgrades tailored to the specific needs of your home, all at no cost.",
      link: "https://saveonenergy.ca/For-Your-Home/Energy-Affordability-Program",
      types: [
        "Energy-efficient refrigerator",
        "Window air conditioner",
        "ENERGY STAR® certified LED light bulbs",
        "Drying line for clothes",
        "Smart power strip",
        "High-efficiency showerheads (standard and handheld)*",
        "Faucet aerators (kitchen and bathroom)*",
        "and more",
      ],
    },
    {
      title: "Home Energy Loan Program (HELP)",
      desc: "Making your home more energy efficient is one of the most substantial actions homeowners can take to reduce the emissions contributing to climate change.",
      link: "https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/",
      types: ["up to $125,000 loan"],
    },
  ];
  return (
    <>
      <div className="px-16">
        {grants.map((data, idx) => (
          <Fragment key={idx}>
            <div className="my-4 font-medium">
              <h3 className="font-bold text-2xl">{data.title}</h3>
              <p className="py-2">{data.desc}</p>
              <p>Some of the benefits of this grants are:</p>
              <ul className="list-disc">
                {data?.types?.map((type, i) => (
                  <li key={i} className="pt-3">
                    {type}
                  </li>
                ))}
              </ul>
              <a
                className="text-cyan-400	underline"
                href={data.link}
                target="_blank"
                rel="noferrer"
              >
                External link
              </a>
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default AllGrants;
