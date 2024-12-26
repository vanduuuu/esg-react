import React from 'react';
import { useLocation } from 'react-router-dom';
import Blogdata from './Blogdata';
import './Blogdetail.css';
import img2 from '../../assets/Leading India Toward a Greener Future with Sustainable Building Practices _2.webp'
const BlogDetail = () => {
  const location = useLocation();
  const blog = Blogdata.find((item) => item.detailPage === location.pathname);

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div className="container">
      <div className="blog-detail">
        <div className="outer-blog-img">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>
        <h2 className="mt-3">{blog.title}</h2>
        {/* Published Date and Author */}
        <div className="blog-meta mb-3 d-flex justify-content-between align-items-center mt-3">
          <span>
            <b>Author:</b> {blog.author}
          </span>
          <span >
            <b>Published Date:</b> {blog.date}
          </span>
        </div>
        <h5>IGBC: Greener Future for India</h5>
        <p>
        Sustainability keeps very importance in today’s world. With growing concerns over environmental challenges, the construction industry is under increasing pressure to adopt greener and more responsible practices. The Indian Green Building Council (IGBC) has taken the lead in guiding this transformation, promoting eco-friendly construction and setting the foundation for a healthier, greener India. But what is IGBC, and how does it impact our future? Let’s take a closer look.
        </p>
        <h5>What is IGBC?</h5>
        <p>
        The Indian Green Building Council (IGBC), established in 2001 under the Confederation of Indian Industry (CII), is a key organization promoting sustainable building practices in India. Its mission is to encourage the construction of environmentally responsible buildings that enhance quality of life while reducing their ecological footprint.
        </p>
        <p>IGBC offers certifications to buildings that adhere to its green standards, focusing on areas such as energy efficiency, water conservation, and the use of sustainable materials. Through its efforts, IGBC is setting benchmarks for sustainable construction and encouraging a shift toward environmentally friendly development.</p>
        <h5>Why IGBC Matters</h5>
        <ul>
          <li className='listingh6'>
          <h6><i class="fa-solid fa-check"></i> Caring for the Environment</h6>
          <p>The construction industry uses up a large share of natural resources and creates significant waste. Buildings can significantly lessen their impact on the environment by following IGBC’s suggestions. Green building practices help save energy, conserve water, and reduce waste, contributing to a cleaner, healthier planet.</p>
          <h6><i class="fa-solid fa-check"></i> Saving Energy
          </h6>
          <p> Buildings with IGBC certification are designed to use energy efficiently while maintaining comfort for occupants. This not only cuts down on electricity bills but also supports India’s efforts to reduce dependence on non-renewable energy sources and lower carbon emissions.</p>
          <h6><i class="fa-solid fa-check"></i>  Long-Term Savings
          </h6>
          <p>  Although green buildings may require a slightly higher initial investment, they are more economical in the long run. Energy-saving technologies and efficient water use help lower ongoing operational costs, making them a wise choice for both property owners and tenants.</p>
          <h6><i class="fa-solid fa-check"></i> Healthier Living and Workspaces
          </h6>
          <p> Green buildings prioritize features like improved air quality, natural lighting, and proper ventilation, which create healthier indoor spaces. IGBC-certified buildings ensure better well-being and productivity for the people who occupy them by using materials that are free from harmful chemicals.</p>
          <h6><i class="fa-solid fa-check"></i> Supporting National Objectives
          </h6>
          <p>  The IGBC contributes to India’s mission to achieve Sustainable Development Goals (SDGs). Their initiatives promote the creation of sustainable, inclusive cities that enhance quality of life, tackle challenges like climate change, and make better use of resources.</p>
          </li>
        </ul>
       
        <div className='row'>
        <div className='col-lg-6'>
        <h5>How IGBC Certification Works</h5>
        <p> The IGBC certification process evaluates buildings based on a comprehensive point system, assessing various factors such as:
        </p>
          <ul>
            <li><p>-Energy efficiency</p></li>
            <li><p>-Water and waste management</p></li>
            <li><p>-Use of eco-friendly materials</p></li>
            <li><p>-Indoor air quality</p></li>
          </ul>
          
        </div>
        <div className='col-lg-6'>
        <img src={img2} alt={blog.title} className="blog-detail-image" />
        </div>
        </div>
        <p>Depending on the score achieved, a building can earn one of the following certifications:</p>
        <ul>
          <li className='listingh6'>
          <h6><i class="fa-solid fa-check"></i>  IGBC Certified:
          </h6>
          <p> This is the starting level of certification, showing that the building meets the basic green building standards.
          </p>

          </li>
          <li className='listingh6'>
          <h6><i class="fa-solid fa-check"></i>  IGBC Gold:
          </h6>
          <p> This is a higher level of certification, awarded to buildings that perform very well in sustainability and go beyond the basics.
          </p>
          </li>
          <li className='listingh6'>
          <h6><i class="fa-solid fa-check"></i> IGBC Platinum:

          </h6>
          <p>  This is the top certification, given to buildings that achieve outstanding results in being environmentally friendly across all areas.
          </p>
          </li>
          </ul>
          <h5>The Future of Cities with IGBC</h5>
          <p> India’s urban areas are growing rapidly, and this urbanization demands sustainable solutions to meet the challenges of resource consumption and environmental degradation. IGBC is driving change by encouraging developers and architects to adopt green practices, ensuring that our cities evolve in harmony with nature.
          </p>
          <p> As more people recognize the value of eco-friendly buildings and as the government pushes for sustainable development, IGBC’s role in shaping the cities of tomorrow becomes even more significant.</p>
          <h5>Conclusion</h5>
          <p> The Indian Green Building Council (IGBC) is not just designing eco-friendly buildings, it’s paving the way for a sustainable future. By focusing on saving energy, conserving resources, and creating healthier spaces, IGBC is changing how we think about construction.</p>
          <p> For builders, architects, and homeowners, IGBC standards isn’t just about going green it’s about improving our quality of life while protecting the planet. As India grows, green buildings will be key to ensuring progress doesn’t harm the environment.</p>
      </div>
    </div>
  );
};

export default BlogDetail;
