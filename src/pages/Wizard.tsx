import PageHeader from '../components/layout/PageHeader'
import ProductInputWizard from '../components/wizard/ProductInputWizard'

export default function Wizard() {
    return (
        <div className="p-margin-mobile lg:p-margin-desktop w-full max-w-container-max mx-auto">
            <PageHeader
                variant="display"
                eyebrow={[{ label: 'Intelligence' }, { label: 'New Analysis', active: true }]}
                title="Submit New Product"
                subtitle="Provide launch details below to generate a success probability index and market intelligence report."
            />
            <ProductInputWizard />
        </div>
    )
}