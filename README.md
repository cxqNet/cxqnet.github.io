## Usage of SUM
To train and perform inference with SUM, follow these steps:

### Setting Up Virtual Environment py310

Create Conda Environment and Install Dependencies
- Create and activate the virtual environment:

```
conda create --name py310 python=3.10
conda activate sum
```
- Install PyTorch and other necessary libraries:
```
conda install pytorch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 pytorch-cuda=12.1 -c pytorch -c nvidia
pip install -r requirements.txt
```
### Datasets Preparation
The dataset `AI4VA`can be downloaded from [this link](). Please place it in the `datasets` folder and confirm the file structure as follows:
```
ADP-GFA
    |- SUM-main
        |- datasets
            |- AI4VA
                |- test
                |- train
                |- val
                |- train_id.csv
                |- val_id.csv
    |- DeepGaze
    |- MDS-ViTNet
    |- results
```
### Pre-trained Weights

Download the SUM model from the provided Google Drive link and move it to the specified directory:

- [Download SUM model](https://drive.google.com/drive/folders/1_DCOJf0ist3twchYmQBRd_ASUwdqPiRP): `SUM_newK5.pth`
- Move `SUM_newK5.pth` to: `SUM-main/net/pre_trained_weights`

## Inference
To generate saliency maps, use the `inference.py` script. Here are the steps and commands:
- Note: The following commands should **not** be modified from their default values.

```
cd SUM-main
python test_resize.py
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0471_1954_05_23-14.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0479_1954_07_18-01.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0480_1954_07_25-01.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0485_1954_08_29-01.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0525_1955_06_05-16.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0553_1955_12_18-06.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python inference.py --img_path './datasets/AI4VA/test/test_resize/Vaillant_0608_1957_01_06-06.png' --condition 3 --output_path SUM_newK5 --heat_map_type HOT
python Pixel_conversion.py
python Gaussian_blur.py
```
### Parameters:

- `--img_path`: Path to the input image for which you want to generate the saliency map.
- `--condition`: Condition index for generating the saliency map. Each number corresponds to a specific type of visual content:
  - `0`: Natural scenes based on the Salicon dataset (Mouse data).
  - `1`: Natural scenes (Eye-tracking data).
  - `2`: E-Commercial images.
  - `3`: User Interface (UI) images.
- `--output_path`: Path to the folder where the output saliency map will be saved.
- `--heat_map_type`: Type of heatmap to generate. Choose either `HOT` for a standalone heatmap or `Overlay` to overlay the heatmap on the original image.

## Training

To train the model, first download the necessary pre-trained weights and datasets:
1. **Pretrained Encoder Weights**:Download `vssmsmall_dp03_ckpt_epoch_238.pth` from Google drive and move the file to:

    `./SUM-main/net/pre_trained_weights/vssmsmall_dp03_ckpt_epoch_238.pth.`
3. **Datasets:**

The dataset `AI4VA`can be downloaded from [this link](https://drive.google.com/drive/folders/1_DCOJf0ist3twchYmQBRd_ASUwdqPiRP). Please place it in the `datasets` folder and confirm the file structure as follows:
- Note: If you have already set the dataset format during the inference phase, you **do not need** to set it again during the training phase.

```
ADP-GFA
    |- SUM-main
        |- datasets
            |- AI4VA
                |- test
                |- train
                |- val
                |- train_id.csv
                |- val_id.csv
    |- DeepGaze
    |- MDS-ViTNet
    |- results
```

Run the training process:
```
cd SUM-main
python train_resize.py
python val_resize.py
python FixationMapper_train.py
python FixationMapper_val.py
python train.py
```
