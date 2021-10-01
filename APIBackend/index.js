const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
let corsOption = {
    "origin": "*"
};

const mongoose = require('mongoose');
const config = {
    uri: ""
}

const dbCon = async () => {
    try {
        await mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
            console.log("Database Connected");
        });
    } catch (err) {
        console.log(err + "\nDatabase Connection Failed\n");
    }
};


app.use(cors(corsOption));
app.use(express.json());
dbCon();

const dbSchema = mongoose.Schema(
    {
        medicineId: {
            type: String
        },
        approved: {
            type: Boolean
        },
        payload: {
            holderDid:{
                type: String
            },
            medicineName: {
                type: String
            },
            mrp: {
                type: String
            },
            companyName: {
                type: String
            },
            mfgDate: {
                type: String
            },
            expDate: {
                type: String
            },
            batch: {
                type: String
            },
            issueDate: {
                type: String
            }
        },
        username: {
            type: String
        }
    }
);

const Medicine = mongoose.model('meds', dbSchema);

app.post('/new', async (req, res)=>{
    let oneMed = {
        medicineId: req.body.medicineId,
        approved: req.body.approved,
        payload:{
            holderDid: req.body.holderDid,
            medicineName: req.body.medicineName,
            mrp: req.body.mrp,
            companyName: req.body.companyName,
            mfgDate: req.body.mfgDate,
            expDate: req.body.expDate,
            batch: req.body.batch,
            issueDate: req.body.issueDate
        },
        username: req.body.username
    }

    let newMed = new Medicine(oneMed);
    await newMed.save();
    res.status(201).json({
        message:"New medicine saved"
    })
});

app.get('/fetchAll', async (req, res)=>{
    let medData = await Medicine.find({});
    if(medData){
        res.status(200).json(medData);
    } else {
        res.status(400).json({
            message:"Med Database not found"
        })
    }
});

app.get('/update/:medId', async(req, res)=>{
	let medFields = await Medicine.find({medicineId: medId});
	medFields[0]['approved'] = true;
	let med = await Medicine.findOneAndUpdate({medicineId: medId}, {$set:medFields[0]},{new:true});
	if(med){
		res.status(200).json({
			message:"Updated medicine"
		});
	} else {
		res.satus(404).json({
			message:"Not found"
		});
	}
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
