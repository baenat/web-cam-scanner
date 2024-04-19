import { BarcodeFormat } from '@zxing/library';

export const formatsAvailable = [
  BarcodeFormat.AZTEC,
  BarcodeFormat.CODABAR,
  BarcodeFormat.CODE_39,
  BarcodeFormat.CODE_93,
  BarcodeFormat.CODE_128,
  BarcodeFormat.DATA_MATRIX,
  BarcodeFormat.EAN_8,
  BarcodeFormat.EAN_13,
  BarcodeFormat.ITF,
  BarcodeFormat.MAXICODE,
  BarcodeFormat.PDF_417,
  BarcodeFormat.QR_CODE,
  BarcodeFormat.RSS_14,
  BarcodeFormat.RSS_EXPANDED,
  BarcodeFormat.UPC_A,
  BarcodeFormat.UPC_E,
  BarcodeFormat.UPC_EAN_EXTENSION
];

export const formatNames = [
  'Aztec 2D barcode format',
  'CODABAR 1D format',
  'Code 39 1D format',
  'Code 93 1D format',
  'Code 128 1D format',
  'Data Matrix 2D barcode format',
  'EAN-8 1D format',
  'EAN-13 1D format',
  'ITF (Interleaved Two of Five) 1D format',
  'MaxiCode 2D barcode format',
  'PDF417 format',
  'QR Code 2D barcode format',
  'RSS 14',
  'RSS EXPANDED',
  'UPC-A 1D format',
  'UPC-E 1D format',
  'UPC/EAN extension format',
];
