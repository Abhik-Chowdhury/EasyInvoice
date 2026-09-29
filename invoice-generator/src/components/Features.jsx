import './Features.css';
import { assets } from "../assets/assets"; // adjust the path based on file structure

const featuresData = [
  {
    title: "Easy to Fill Invoice Details",
    description: "Quickly enter invoice details without hassle. No complex fields—just straightforward invoicing.",
    image: assets.features1,
    imageLeft: true
  },
  {
    title: "Sleek Dashboard",
    description: "Your dashboard provides a clear overview of your saved invoices, each displayed with a handy thumbnail preview. Quickly revisit previous invoices, reuse them, or continue editing drafts—all in one elegant workspace.",
    image: assets.features2,
    imageLeft: false
  },
  {
    title: "Invoice Preview with Action Buttons",
    description: "Instantly visualize your invoice as you fill it out with our real-time preview pane. Seamlessly switch between drafts and take action with a single click—Save, Download, or Delete invoices without leaving the page.",
    image: assets.features3,
    imageLeft: true
  },
  {
    title: "Send via Email in a Click",
    description: "Send invoices to clients directly through QuickInvoice using Brevo SMTP integration.",
    image: assets.features4,
    imageLeft: false
  }
];

const Features = () => {
  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">Why Choose EasyInvoice?</h2>

        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="row align-items-center mb-5"
          >
            {feature.imageLeft && (
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src={feature.image}
                  className="img-fluid rounded feature-image"
                  alt={feature.title}
                />
              </div>
            )}

            <div className="col-md-6">
              <h4 className="fw-bold">{feature.title}</h4>
              <p className="text-muted">{feature.description}</p>
            </div>

            {!feature.imageLeft && (
              <div className="col-md-6 text-center mt-4 mt-md-0">
                <img
                  src={feature.image}
                  className="img-fluid rounded feature-image"
                  alt={feature.title}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    
  );
};

export default Features;