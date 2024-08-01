import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='font-mono flex flex-row space-x-5'>
			<div>
				<Link href="/">
					<Image src="/2.png" alt="LOGO" width={100} height={100} className="left-0" />
				</Link>
			</div>
      <div>
        <p className='text-white'>PRODUCT</p>
      </div>
      <div>
        <p className='text-white'>COMPANY</p>
      </div>
      <div>
        <p className='text-white'>RESOURCES</p>
      </div>
      <div>
        <p className='text-white'>LEGAL</p>
      </div>
		</div>
	);
};

export default Footer;
