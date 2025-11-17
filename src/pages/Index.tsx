import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'leasing', 'services', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">AWG Leasing</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'leasing', label: 'Leasing' },
              { id: 'services', label: 'Services' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/0408176e-b315-437b-a986-9fb1a9f95be0/files/efb0db60-04b3-42ec-9b7f-c60d9caeb55a.jpg" 
            alt="Office Building" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Leasing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Flexible financing for your business growth. Trust AWG Leasing GmbH for tailored leasing solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => scrollToSection('leasing')}
              >
                Explore Leasing Options
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/0408176e-b315-437b-a986-9fb1a9f95be0/files/2b6f8ce6-4b7e-40f1-95ae-1ae659c56b8c.jpg" 
                alt="Business Partnership" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About AWG Leasing GmbH</h2>
              <p className="text-lg text-gray-600 mb-4">
                With over two decades of expertise in the leasing industry, AWG Leasing GmbH has established 
                itself as a trusted partner for businesses across Germany and Europe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in providing flexible, customized leasing solutions that help businesses grow 
                without the burden of large capital investments. Our commitment to excellence and customer 
                satisfaction sets us apart in the industry.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">€2B+</div>
                  <div className="text-sm text-gray-600">Leasing Volume</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose AWG Leasing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Trusted Partner',
                description: 'Over 20 years of experience in the leasing industry with proven reliability and strong relationships with major financial institutions.'
              },
              {
                icon: 'TrendingUp',
                title: 'Flexible Solutions',
                description: 'Customized leasing packages tailored to your business needs, budget, and growth plans with competitive rates.'
              },
              {
                icon: 'Users',
                title: 'Expert Support',
                description: 'Dedicated team of professionals with deep industry knowledge ready to assist you at every step of your leasing journey.'
              }
            ].map((feature, index) => (
              <Card key={index} className="transition-transform duration-200 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leasing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Leasing Options</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the leasing solution that best fits your business needs. We offer flexible terms and competitive rates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/0408176e-b315-437b-a986-9fb1a9f95be0/files/c878c82f-0fb6-4620-8555-dfb875a5ceaf.jpg" 
                alt="Vehicle Leasing" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Operating Lease</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for businesses that want to use assets without ownership. Enjoy lower monthly payments, 
                  tax benefits, and the flexibility to upgrade equipment regularly.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Lower monthly payments</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Off-balance sheet financing</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Flexible upgrade options</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Tax-deductible payments</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Icon name="FileCheck" className="text-primary" size={120} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Finance Lease</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for businesses planning long-term asset ownership. Build equity while enjoying the benefits 
                  of leasing with option to purchase at the end of the term.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Ownership option at end of term</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Build equity over time</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Fixed monthly payments</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Depreciation benefits</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">How Our Leasing Process Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Consultation', description: 'Discuss your needs with our experts', icon: 'MessageSquare' },
                { step: '2', title: 'Proposal', description: 'Receive a customized leasing offer', icon: 'FileText' },
                { step: '3', title: 'Approval', description: 'Quick approval process (24-48 hours)', icon: 'CheckCircle' },
                { step: '4', title: 'Delivery', description: 'Get your asset and start using it', icon: 'Truck' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive leasing solutions across various industries and asset types.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'Car', 
                title: 'Vehicle Leasing', 
                description: 'Cars, trucks, vans, and complete fleet solutions for businesses of all sizes'
              },
              { 
                icon: 'Laptop', 
                title: 'Equipment Leasing', 
                description: 'IT infrastructure, office equipment, and technology solutions'
              },
              { 
                icon: 'Factory', 
                title: 'Machinery Leasing', 
                description: 'Industrial equipment, production machinery, and specialized tools'
              },
              { 
                icon: 'Building', 
                title: 'Real Estate', 
                description: 'Commercial property leasing and sale-leaseback options'
              }
            ].map((service, index) => (
              <Card key={index} className="transition-transform duration-200 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Client Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about working with AWG Leasing GmbH.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Weber',
                company: 'Weber Logistics GmbH',
                role: 'CEO',
                text: 'AWG Leasing has been instrumental in helping us expand our fleet without straining our capital. Their flexible terms and excellent customer service make them our preferred leasing partner.',
                rating: 5
              },
              {
                name: 'Sarah Müller',
                company: 'TechStart Solutions',
                role: 'CFO',
                text: 'The IT equipment leasing solution from AWG allowed us to scale our operations rapidly. The approval process was quick, and the terms were very competitive. Highly recommended!',
                rating: 5
              },
              {
                name: 'Thomas Schmidt',
                company: 'Schmidt Manufacturing',
                role: 'Operations Director',
                text: 'Working with AWG Leasing for our machinery needs has been a game-changer. Their expertise in industrial equipment and personalized approach set them apart from other providers.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="transition-transform duration-200 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">AWG Leasing GmbH</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-600">Bahnhofstr. 27a</p>
                          <p className="text-gray-600">33102 Paderborn</p>
                          <p className="text-gray-600">Germany</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Phone" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-600">+49 5251 29061 0</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Mail" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <p className="text-gray-600">support@awg-leasing.it.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
                    <div className="space-y-2 text-gray-600 mb-6">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <Button className="w-full mb-3">Request a Quote</Button>
                    <Button variant="outline" className="w-full">Schedule Consultation</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2024 AWG Leasing GmbH. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Imprint
              </a>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
};

export default Index;
