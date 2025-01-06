import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Globe, Mail, Github, Twitter, Linkedin } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { register, handleSubmit } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-[#022623] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5" />
              <p>Mechinagar, Jhapa, Nepal</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <p>+977 9807941122</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Globe className="h-5 w-5" />
              <a href="https://jhapa.dev" className="hover:underline">
              jhapa.dev
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5" />
              <a href="mailto:mail@jhapa.dev" className="hover:underline">
              mail@jhapa.dev
              </a>
            </div>
            
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/jhapa-dev" className="hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/jhapa-dev" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <Input
              {...register('name')}
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Input
              {...register('email')}
              type="email"
              placeholder="Your Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Textarea
              {...register('message')}
              placeholder="Your Message"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              rows={5}
            />
            <Button className="w-full bg-white text-[#022623] hover:bg-white/90">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}