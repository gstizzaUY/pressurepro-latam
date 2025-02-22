import { useRouter } from 'next/router';
import { industries } from '../../constants/data';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { TypingText, TitleText } from '../../components/CustomTexts';

export default function IndustryPage() {
    const router = useRouter();
    const { id } = router.query;

    const industry = industries.find(ind => ind.id === id);

    if (!industry) return <div>Cargando...</div>;

    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
            >
                <TypingText title={`| ${industry.name}`} textStyles='text-center' />
                <TitleText
                    title={`Soluciones para ${industry.name}`}
                    textStyles='text-center'
                />

                <div className='mt-[50px] flex flex-wrap justify-center gap-[30px]'>
                    {industry.solutions.map((solution) => (
                        <motion.div
                            key={solution.title}
                            className='flex-[1] flex flex-col gap-[24px] p-8 rounded-[32px] gradient-05 sm:w-[360px] w-full'
                        >
                            <img
                                src={solution.imgUrl}
                                alt={solution.title}
                                className='w-full h-[250px] object-cover rounded-[24px]'
                            />
                            <h3 className='font-semibold text-[24px] text-white'>
                                {solution.title}
                            </h3>
                            <p className='text-[16px] text-secondary-white'>
                                {solution.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}