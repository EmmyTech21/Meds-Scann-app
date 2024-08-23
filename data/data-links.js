import appDetails from "../model/Details";
import Links from "../model/linksModel";

export  const homeLinks = [
    new Links('c1', 'Scan',  require('../Images/Vector.png')),
    new Links('c2', 'Website', require('../Images/Vector-2.png')),
    new Links('c3', 'About',  require('../Images/Vector-3.png')),
    new Links('c4', 'Report',  require('../Images/Vector-4.png')),
];


export const Details = [
    new appDetails('d1', ['c1' ],'Scan  to verify product authenticity', require('../Images/image 12.png'),'scan' ),
    new appDetails('d2',['c2'], 'Medscan.Africa ', require('../Images/Vector-2.png'),'Website'),
    new appDetails('d3', ['c3',],' About our our service', require('../Images/Vector-3.png'),'view about'),
    new appDetails('d4', ['c4'],' The product you are about to purchase is a counterfeit. kindly purchase the product elsewhere and click the button below to report. ', require('../Images/Report-avatar.png'), 'Report')
    
]