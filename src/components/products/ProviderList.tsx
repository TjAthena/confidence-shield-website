
interface Provider {
  name: string;
  logo?: string;
  description: string;
}

interface ProviderListProps {
  providers: Provider[];
}

const ProviderList = ({ providers }: ProviderListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Our Partnered Providers</h3>
      <div className="space-y-4">
        {providers.map((provider, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded">
                {provider.logo ? (
                  <img src={provider.logo} alt={provider.name} />
                ) : (
                  <span className="text-lg font-bold text-gray-500">{provider.name[0]}</span>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F]">{provider.name}</h4>
                <p className="text-sm text-gray-600">{provider.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
