<?php
namespace Dacod\ExternalLinksInNewTab\Block;

class Head extends \Magento\Framework\View\Element\Template
{
    public $assetRepository;
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context, 
        array $data = [],    
        \Magento\Framework\View\Asset\Repository $assetRepository,
        \Dacod\ExternalLinksInNewTab\Helper\Data $helperData
    )
    {
        $this->assetRepository = $assetRepository;
        $this->helperData = $helperData;
        return parent::__construct($context, $data);
        
    }


    public function getConfig($configname){

    	return $this->helperData->getGeneralConfig($configname);

    }
}